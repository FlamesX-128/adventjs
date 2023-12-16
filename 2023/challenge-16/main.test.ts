import { assertEquals } from 'assert'

import { TreeNode, transformTree } from './main.ts'

Deno.test('Challenge #16: ❌ Friday deployment', () => {
    const tree: number[] = [1]

    const result = transformTree(tree)
    const expected: null | TreeNode = {
        "value": 1,
        "left": null,
        "right": null
    }

    assertEquals(result, expected)
})

Deno.test('Challenge #16: ❌ Friday deployment', () => {
    const tree: number[] = [1, 2, 3]

    const result = transformTree(tree)
    const expected: null | TreeNode = {
        "value": 1,
        "left": {
            "value": 2,
            "left": null,
            "right": null
        },
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    }

    assertEquals(result, expected)
})
