function processUser(user) {
    if (!isValidCandidate(user)) {
        return null;
    }

    return doSomething(user);
}

function isValidCandidate(user) {
    return (
        user &&
        user.isActive &&
        user.hasPermission
    );
}

function doSomething(user) {
    return `User ${user.name} berhasil diproses`;
}

const user = {
    name: "Jovanov",
    isActive: true,
    hasPermission: true
};

console.log(processUser(user));