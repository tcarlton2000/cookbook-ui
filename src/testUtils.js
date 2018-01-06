//@ts-check
export const doImmediate = (done, func) => {
    setImmediate(() => {
        try {
            func();
        } catch (err) {
            done.fail(err);
        }
        done();
    });
}