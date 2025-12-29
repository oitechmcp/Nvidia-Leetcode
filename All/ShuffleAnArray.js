class Solution {
    constructor(nums) {
        this.original = nums.slice();
        this.current = nums.slice();
    }

    reset() {
        this.current = this.original.slice();
        return this.current;
    }

    shuffle() {
        for (let i = this.current.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.current[i], this.current[j]] = [this.current[j], this.current[i]];
        }
        return this.current;
    }
}