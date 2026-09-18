URL 	= https://raw.githubusercontent.com/yokoffing/Betterfox/refs/heads/main
CURL	= curl --progress-bar -o
FILE    = scripts/$@.js
CALL    = echo [$@]

.PHONY: build clean watch

build: tools/build 
	./tools/build

tools/build: tools/build.c tools/build.h
	$(CC) -O2 -Wall -Wextra -o tools/build tools/build.c -I tools/build.h

clean:
	rm -rf dist tools/build

watch: tools/build
	@while true; do \
		./tools/build; \
		inotifywait -qre modify src tools/VERSION > /dev/null; \
	done

Fastfox Peskyfox Securefox Smoothfox:
	@$(CALL)
	@$(CURL) $(FILE) $(URL)/$@.js

Betterfox:
	@$(CALL)
	@$(CURL) $(FILE) $(URL)/user.js

update: Fastfox Peskyfox Securefox Smoothfox Betterfox

