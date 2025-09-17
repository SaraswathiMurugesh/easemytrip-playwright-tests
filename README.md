# EaseMyTrip Playwright Test Framework

This is an automated testing framework for EaseMyTrip.com using Playwright with TypeScript.

## Project Structure

```
ease-my-trip/
├── login.ts                    # Login automation script
├── authArtifacts/             # Storage for auth states and cookies
├── pages/                     # Page Object Models
├── tests/                     # Test files
├── utils/                     # Utility functions and helpers
│   ├── pageUtils.ts          # Common page utilities
│   ├── constants/            # Constants and enums
│   │   └── constants.ts      # Timeout and keyboard action constants
│   ├── selectors/           # Page element selectors
│   │   └── selectors.ts     # Element locators
│   └── workflows/           # Reusable workflow functions
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure TypeScript:
- The project uses `tsconfig.json` for TypeScript configuration
- Supports CommonJS modules
- Targets ES2017

## Key Features

### Authentication
- Automated login process
- Storage state management for session persistence
- Cookie handling

### Constants and Configurations
- **TimeOut Values:**
  - DefaultMaxWaitTime: 180000ms (3 minutes)
  - DefaultWaitTime: 30000ms (30 seconds)
  - ElementWaitTime: 5000ms (5 seconds)
  - LoadTimeOut: 60000ms (1 minute)
  - ShortWaitTime: 2000ms (2 seconds)

- **Keyboard Actions:**
  - ArrowDown
  - ArrowUp
  - Enter
  - Escape
  - Tab

### Browser Configuration
- Chrome/Chromium browser
- Maximized window (1920x1080)
- Headless mode configurable

## Running Tests

### Login Script
Run the login script to authenticate and save the session state:
```bash
npm run login
```

## Best Practices
1. Use page objects for better maintainability
2. Utilize constants for timeouts and selectors
3. Implement reusable workflows
4. Store authentication artifacts separately (gitignored)
5. Handle errors appropriately with try-catch blocks

## Contributing
1. Follow the existing code structure
2. Use TypeScript types appropriately
3. Document new features and changes
4. Test thoroughly before submitting changes

## Note
Authentication artifacts (cookies, storage state) are stored in the `authArtifacts` directory and should not be committed to the repository.