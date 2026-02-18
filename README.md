# Get started with RWX

[RWX](https://rwx.com) is the CI/CD platform for high velocity teams.

## Step 1: Install the CLI

With RWX, you can run tasks without having to push to a git repository.
The easiest way to get started is by using the CLI to initiate runs locally.

### Mac OS

Install via homebrew:

```
brew install rwx-cloud/tap/rwx
```

### Windows Subsystem for Linux (WSL)

Install via homebrew:

```
brew install rwx-cloud/tap/rwx
```

### Linux

Download the [latest release](https://github.com/rwx-cloud/cli/releases) on GitHub for your platform and architecture.
Move the binary into a directory on your `PATH` and make it executable.

## Step 2: Authenticate with the RWX CLI

You'll need to log in to use the CLI. To initiate the authentication process, run:

```
rwx login
```

You can verify you've authenticated successfully by running:

```
rwx whoami
```

## Step 3: Kick off your first run

This repository contains an example Node.js project. Clone this repository and run the ci.yml workflow. Or if you'd prefer, check out the [documentation](https://www.rwx.com/docs/mint/guides/ci) to learn how to write your own workflows.

```
git clone https://github.com/rwx-cloud/ci-examples.git
```
```
cd ci-examples
```
```
rwx run .rwx/ci.yml --open
```

You can run this example run multiple times and you'll see that on subsequent runs all of the tasks will be cache hits.
