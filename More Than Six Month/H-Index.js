var hIndex = function(citations) {
    const n = citations.length;
    const citation_bucket = Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        if (citations[i] >= n) {
            citation_bucket[n]++;
        } else {
            citation_bucket[citations[i]]++;
        }
    }

    let cited = 0;
    for (let h = n; h >= 0; h--) {
        cited += citation_bucket[h];
        if (cited >= h) {
            return h;
        }
    }

    return 0;
};