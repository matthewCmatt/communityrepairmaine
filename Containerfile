# ---------- Build UI ----------
# Stage 1: Build the application
FROM node:25-alpine AS uibuild

RUN npm install -g pnpm@10.10.0

WORKDIR /app

COPY web/pnpm-lock.yaml web/package.json ./
RUN pnpm install --frozen-lockfile


# Copy the rest of the source code and build
COPY web/ .
RUN pnpm run build

# ---------- Build Go binary ----------
FROM golang:1.26-alpine AS builder

WORKDIR /app

COPY pb/go.mod pb/go.sum ./
RUN go mod download

COPY pb/ .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o pocketbase-app .

# ---------- Runtime stage ----------
FROM alpine:3.23

WORKDIR /app

RUN apk add --no-cache ca-certificates

COPY --from=builder /app/pocketbase-app .

COPY --from=uibuild /app/build /app/pb_public

VOLUME ["/app/pb_data"]

EXPOSE 8090

CMD ["./pocketbase-app", "serve", "--http=0.0.0.0:8090"]