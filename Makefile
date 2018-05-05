clean:
	rm -rf ./lib/

build-es:
	NODE_PATH=$(shell which node) \
	NODE_ENV=production \
	BABEL_ENV=production \
	yarn run build:es

prepublish:
	$(MAKE) clean

	$(MAKE) build-es

	yarn run build:flow-gen
#	cp ./flow-typed/index.js.flow ./lib/index.js.flow

build:
	yarn run build-storybook

publish:
	yarn publish --access public