# Building for different arch
Create builder:
`docker buildx create --name multibuilder`
Use new builder:
`docker buildx use multibuilder`
Build image with different architectures:
`docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t redroddeck/dash --push .`

Run image:
`docker run --rm -it -p 8080:80 dash`
