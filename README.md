# Building for different arch

`docker buildx create --name multibuilder`
`docker buildx use multibuilder`
`docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t redroddeck/dash --push .`

`docker run --rm -it -p 8080:80 dash`