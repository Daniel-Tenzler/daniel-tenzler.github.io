import { PassThrough } from "stream";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";

export default function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  return new Promise((resolve, reject) => {
    const callbackName = isbot(request.headers.get("user-agent"))
      ? "onAllReady"
      : "onShellReady";

    const stream = new PassThrough();

    const { pipe, abort } = renderToPipeableStream(
      <RemixServer context={remixContext} url={request.url} />,
      {
        [callbackName]: () => {
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              status: responseStatusCode,
              headers: responseHeaders,
            })
          );
          pipe(stream);
        },
        onShellError: reject,
        onError: (error) => {
          console.error(error);
        },
      }
    );

    setTimeout(abort, 5000);
  });
}
