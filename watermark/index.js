const path = require('path')
const { Jimp } = require('jimp')

async function mark(
  waterFile,
  originFile,
  targetFile,
  proportion = 5,
  marginProportion = 0.01
) {
  const [water, origin] = await Promise.all([
    Jimp.read(waterFile),
    Jimp.read(originFile)
  ])

  const curProportion = origin.bitmap.width / water.bitmap.width
  water.scale(curProportion / proportion)

  const right = origin.bitmap.width * marginProportion
  const bottom = origin.bitmap.height * marginProportion
  const x = origin.bitmap.width - right - water.bitmap.width
  const y = origin.bitmap.height - bottom - water.bitmap.height

  origin.composite(water, x, y, {
    mode: Jimp.BLEND_SOURCE_OVER,
    opacitySource: 0.3
  })

  await origin.write(targetFile)
}

async function test() {
  const watermark = path.resolve(__dirname, '../water.png')
  const originPath = path.resolve(
    __dirname,
    '../uploadedFile/1745846175854-tlf81q.png'
  )
  const targetPath = path.resolve(__dirname, '../new.png')

  mark(watermark, originPath, targetPath)
}

test()
