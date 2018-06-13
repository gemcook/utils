clean:
	rm -rf ./lib/

build-umd:
	NODE_PATH=$(shell which node) \
	NODE_ENV=production \
	BABEL_ENV=production \
	yarn run build:umd

prepublish:
	$(MAKE) clean

	$(MAKE) build-umd

	yarn build:flow-gen
	# cp ./flow-typed/index.js.flow ./lib/index.js.flow

publish:
	yarn publish --access public
