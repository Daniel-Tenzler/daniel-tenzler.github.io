# SFTP Deployment System

This project now supports dual deployment targets: GitHub Pages and private SFTP server deployment.

## Usage

### Deploy to GitHub Pages

```bash
yarn deploy:github
```

### Deploy to Private Server (SFTP)

```bash
yarn deploy:server
```

## Configuration

### Environment Files

- `.env.github` - Configuration for GitHub Pages deployment
- `.env.server` - Configuration for SFTP server deployment

### Required Environment Variables for SFTP

Create `.env.server` with the following variables:

```bash
BASE_URL=https://daniel-tenzler.de
DEPLOY_TARGET=server
SFTP_HOST=daniel-tenzler.de
SFTP_PORT=22
SFTP_USER=[username]
SFTP_PRIVATE_KEY_PATH=./hetzner_sftp_openssh
SFTP_REMOTE_DIR=public_html
```

### SSH Key

The system expects an OpenSSH private key file (e.g., `hetzner_sftp_openssh`) in the project root for SFTP authentication.

## Features

### SFTP Deployer

- **Secure Connection**: Uses SSH2 SFTP client with public key authentication
- **Retry Logic**: 3 attempts with exponential backoff
- **Whitelist Protection**: Preserves specified directories and files
- **File Permissions**: Sets 644 for files, 755 for directories
- **Validation**: Verifies deployment by checking index.html exists
- **Progress Logging**: Colored output with detailed progress information

### Deploy Helper

- **Environment Management**: Automatically loads appropriate environment file
- **Build Integration**: Runs clean and build before deployment
- **Error Handling**: Graceful error handling and cleanup
- **Colored Logging**: Provides clear feedback throughout the process

### Whitelist Protection

The `scripts/whitelist.json` file defines protected directories and files that won't be removed during deployment:

```json
{
	"protectedDirectories": ["doppelkopf"],
	"protectedFiles": [".htaccess", "robots.txt"]
}
```

## How It Works

1. **Environment Loading**: Copies the appropriate `.env` file to `.env` for the deployment
2. **Build Process**: Cleans and builds the project using Astro
3. **Deployment**:
    - For GitHub: Uses gh-pages package
    - For SFTP: Connects to server, cleans remote directory (except protected items), uploads files, and validates deployment
4. **Cleanup**: Removes temporary environment file

## Security Considerations

- Private key files should have appropriate permissions (600)
- Environment variables containing sensitive data are never logged
- The system validates file paths and prevents directory traversal
- All sensitive operations are performed with proper error handling

## Troubleshooting

### Common Issues

1. **SSH Key Permissions**: Ensure the private key file has proper permissions
2. **Connection Issues**: Check SFTP credentials and server connectivity
3. **Build Failures**: Verify Astro configuration and dependencies
4. **Permission Errors**: Ensure the SFTP user has write access to the remote directory

### Debug Mode

For detailed debugging, you can modify the log levels in the deployment scripts to include more verbose output.

## Dependencies

- `ssh2-sftp-client`: For SFTP operations
- `chalk`: For colored console output
- `dotenv`: For environment variable management
