#!/usr/bin/env node

const PDFMerger = require('pdf-merger-js');

(async () => {
  const merger = new PDFMerger();
  const files = process.argv.slice(2);

  for (const file of files) {
    await merger.add(file);
  }

  const buffer = await merger.saveAsBuffer();

  process.stdout.write(buffer);
})().then(() => {}).catch(err => {
    console.error(err);
    process.exitCode = 1;
});
