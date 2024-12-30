# Plexy

Plexy is an alternative web UI for the Plex app, designed to provide a user experience similar to Netflix. This project was inspired by [PerPlexed](https://github.com/Ipmake/PerPlexed), without which Plexy would not have been possible.

![plexy demo gif](https://raw.githubusercontent.com/ricoloic/plexy/main/demo.gif)

## Getting Started

### Development Setup

Follow these steps to run the project locally:

1. Install dependencies:
    ```bash
    pnpm install
    ```
2. Start the development server:
    ```bash
    pnpm dev
    ```
3. Open http://localhost:3000 in your browser to view the app.

### Docker Setup

You can also run Plexy using Docker:

1. Clone the project repository:
    ```bash
    git clone https://github.com/ricoloic/plexy.git
    ```
2. Build and start the Docker container:
    ```bash
    docker compose up -d # If using Compose v1, use docker-compose up -d
    ```
3. Access the application at http://localhost:3000.

## Contributing

Plexy is in active development, and contributions are welcome! If you encounter any bugs or have suggestions for new features, please open a [GitHub issue](https://github.com/ricoloic/plexy/issues/new).

## Roadmap

- Complete the implementation of **Mark as Watched** and **Mark as Unwatched** across all relevant areas.
- Introduce additional features to enhance the user experience.
- Refine the UI for better usability and polish.