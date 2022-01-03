async function typewriter(text, elementId, waitAfter) {
    var n = 0,
        isTag = false,
        isSpecial = false;
    const el = document.getElementById(elementId);

    const wait = () => new Promise(r => setTimeout(r, waitAfter));
    const nowait = () => new Promise(r => r());

    const render = () => el.innerHTML = text.slice(0, n + 1);

    const cursor = document.createElement('span');
    cursor.id = "blink";

    el.style.setProperty("--cursor-visibility", "visible");
    while (n < text.length) {
        if (text.charAt(n) === "<") isTag = true;
        if (text.charAt(n) === ">") isTag = false;
        if (text.charAt(n) === "&" && !isTag) isSpecial = true;
        if (text.charAt(n) === ";") isSpecial = false;

        if (isTag || isSpecial) {
            ++n;
            continue;
        }

        window.requestAnimationFrame(render);

        if (waitAfter === 0) {
            await nowait();
        } else {
            await wait();
        }

        ++n;
    }
    el.style.setProperty("--cursor-visibility", "collapse");
}
