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

	cp ./flow-typed/index.js.flow ./lib/index.js.flow

publish:
	yarn publish --access public

gen-flow:
	flow gen-flow-files ./src/index.js --out-dir ./flow-typed
