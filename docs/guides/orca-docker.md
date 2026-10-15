---
title: Orca in Docker
description: Run Guidepup Orca tests in a preconfigured Linux Docker image.
---

# Orca in Docker

The [Guidepup Docker images](https://github.com/guidepup/guidepup-docker/pkgs/container/guidepup)
provide a Linux environment with Node.js, the runtime packages configured by
[`@guidepup/setup`](https://github.com/guidepup/setup), and the Orca assets for
the corresponding `@guidepup/guidepup` release.

They are available for `linux/amd64` and `linux/arm64`.

## Supported images

Choose an image based on your Linux distribution and Node.js major version:

| Distribution            | Node.js | Image tag                      |
| :---------------------- | ------: | :----------------------------- |
| Ubuntu 26.04 (Resolute) |      24 | `x.x.x-ubuntu-resolute-node24` |
| Ubuntu 26.04 (Resolute) |      26 | `x.x.x-ubuntu-resolute-node26` |
| Debian 13 (Trixie)      |      24 | `x.x.x-debian-trixie-node24`   |
| Debian 13 (Trixie)      |      26 | `x.x.x-debian-trixie-node26`   |

Where tags include the matching Guidepup release version `x.x.x`:

```text
ghcr.io/guidepup/guidepup:<guidepup-version>-<distribution>-node<node-version>
```

For example, `ghcr.io/guidepup/guidepup:0.36.2-ubuntu-resolute-node24` uses
Guidepup 0.36.2, Ubuntu 26.04, and Node.js 24. Use the image version that
matches the `@guidepup/guidepup` version in your project. The images do not
include a browser; install the browser your tests require in your project or
derived image.

## Run a project from a volume

Mount your project into a container and run it there. The base image has no
default working directory, so the example starts a shell and changes to the
mounted project directory:

```bash
docker run --rm -it \
  --volume "$PWD:/project" \
  ghcr.io/guidepup/guidepup:0.36.2-ubuntu-resolute-node24 \
  bash
```

Inside the container, install dependencies and run your tests:

```bash
cd /project
npm ci
npm test
```

The image runs as root by default, so the preinstalled Orca assets are available
from Guidepup's default cache at `/root/.cache/guidepup`. If you run the
container as another user, set `GUIDEPUP_SCREEN_READERS_PATH` to a cache path
writable by that user and install the Orca assets there.

## Build a project image

Use the Guidepup image as a base when you want to bake project dependencies or
other tools into a reusable image. For example:

```dockerfile
FROM ghcr.io/guidepup/guidepup:0.36.2-ubuntu-resolute-node24

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
CMD ["npm", "test"]
```

Build and run it from the directory containing the Dockerfile:

```bash
docker build -t my-guidepup-project .
docker run --rm my-guidepup-project
```

Choose the base tag that matches your project's Guidepup, Linux distribution,
and Node.js versions. See [Testing Orca](../screen-reader-testing/testing-orca)
for using Orca through Guidepup in your tests.
