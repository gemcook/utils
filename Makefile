clean:
	rm -rf ./lib/

build-umd:
	NODE_PATH="$(shell which node)" \
	NODE_ENV=production \
	BABEL_ENV=production \
	yarn run build:umd

prepublish:
	$(MAKE) clean

	$(MAKE) build-umd

build:
	yarn run build-storybook

publish:
	yarn publish --access public
