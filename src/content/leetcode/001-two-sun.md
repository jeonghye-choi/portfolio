---
title: "Two Sum"
date: "2026-09-22"
problem: https://leetcode.com/problems/two-sum
---

- my idea: 순환하면서 다 체크해야 하지 않을까?

- code

  ```ts
  function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = 1; j < nums.length; j++) {
        if (i !== j && nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
  ```

- result: 118 ms · Beats 6.50%
- improved

  ```ts
  function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
  ```

- result: 32 ms Beats 31.19%

- what i learn:
  - j를 i + 1부터 시작하면 중복 비교를 피할 수 있다.
  - break는 가장 가까운 loop를 종료한다.
  - 현재 방식은 O(n²)이다.
  - Hash Map을 사용하면 O(n)으로 개선할 수 있다.
