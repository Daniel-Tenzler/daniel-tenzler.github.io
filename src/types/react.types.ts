// React component prop patterns
export type Children = React.ReactNode;
export type ClassName = string | undefined;

// Theme prop for styled components
export interface WithTheme {
  theme: {
    colors: Record<string, string>;
    spacing: Record<string, number>;
    breakpoints: Record<string, string>;
  };
}

// Common component props
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ClickableProps extends BaseProps {
  onClick?: () => void;
  disabled?: boolean;
}

// Form element props
export interface InputProps extends BaseProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

// Async loading states
export interface LoadingState {
  isLoading: boolean;
  error: Error | null;
}

export interface WithLoadingData<T> extends LoadingState {
  data: T | null;
}
