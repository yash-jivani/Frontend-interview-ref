const schedules = [
    { id: "a", dependencies: ["b", "c"] },
    { id: "b", dependencies: ["d"] },
    { id: "c", dependencies: ["e"] },
    { id: "d", dependencies: [] },
    { id: "e", dependencies: ["f"] },
    { id: "f", dependencies: [] },
];
