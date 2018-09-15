clean:
	rm -rf ./lib/

build-rollup:
	NODE_PATH=$(shell which node) \
	NODE_ENV=production \
	BABEL_ENV=production \
	yarn run build:rollup

prepublish:
	$(MAKE) clean

	$(MAKE) build-rollup

	# yarn build:flow-gen
	cp ./flow-typed/index.js.flow ./lib/index.js.flow

publish:
	yarn publish --access public --tag nightly
