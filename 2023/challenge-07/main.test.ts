import { assertEquals } from 'assert'

import { drawGift } from './main.ts'

Deno.test('Challenge #7: 📦 The 3D boxes', () => {
    const size = 5
    const symbol = '*'

    const result = drawGift(size, symbol)
    const expected =
        `    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
`

    assertEquals(result, expected)
})
