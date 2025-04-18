FROM node:18-alpine AS builder
RUN apk update
# Set working directory
WORKDIR /app
RUN yarn global add turbo
RUN node - add --global pnpm
COPY . .
RUN ls -la
RUN turbo prune --scope=server --docker

# Add lockfile and package.json's of isolated subworkspace
FROM node:18-alpine AS installer
RUN apk update
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=builder /app/turbo.json ./turbo.json
RUN pnpm install --frozen-lockfile

FROM node:18-alpine AS sourcer
WORKDIR /app
COPY --from=installer /app/ .
COPY --from=builder /app/out/full/ .
COPY .gitignore .gitignore
RUN yarn turbo run build --scope=api --include-dependencies --no-deps

FROM node:18-alpine as runner
WORKDIR /app
COPY --from=sourcer /app/ .
CMD [ "node", "apps/api/dist/main.js" ]
