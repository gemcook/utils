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

<<<<<<< Updated upstream
	cp ./flow-typed/index.js.flow ./lib/index.js.flow
=======
build:
	yarn run build-storybook
>>>>>>> Stashed changes

publish:
	yarn publish --access public

gen-flow:
	flow gen-flow-files ./src/index.js --out-dir ./flow-typed
