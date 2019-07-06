.PHONY: test
test:
	yarn test

# ライブラリのためのビルドをする
.PHONY: build
build:
	yarn run rollup -c

# ライブラリの publish をする
.PHONY: publish
publish:
	yarn publish --access public
