#define OUTFILE "dist/user.js" //OUTPUT
#include "build.h"

#define NAME        "eaterfox"
#define DESCRIPTION "Betterfox Fetcher cause I am too lazy to reconfig the whole every time"

#define USERJS group( \
        "scripts/custom.js", \
        "scripts/user.js", \
    )

#define USERJSALL group( \
        "scripts/custom.js", \
        "scripts/Fastfox.js", \
        "scripts/Peskyfox.js", \
        "scripts/Securefox.js", \
        "scripts/Smoothfox.js", \
    )
 
listorder(
    USERJS
    );

declaremeta(
    .name = NAME,
    .description = DESCRIPTION,
);

int main(void) {
    build_t b;
    build_init(&b, NULL, "__HLS_SAVER_VERSION__"); 
    build_userscript_header(&b, &META);
    build_add_all(&b, ORDER, ORDER_COUNT, "src/");
    build_finish(&b, NULL); 
    return 0;
}
