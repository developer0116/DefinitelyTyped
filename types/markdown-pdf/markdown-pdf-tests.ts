import mdPdf = require('markdown-pdf');

// $ExpectType void
mdPdf()
    .from('path')
    .to('path', () => {});
// $ExpectType void
mdPdf()
    .from.string('markdown')
    .to('path', () => {});
// $ExpectType void
mdPdf({ paperOrientation: 'landscape', paperFormat: 'A3' })
    .from('lol')
    .to('lol', () => {});
// $ExpectType void
mdPdf()
    .concat.from.paths(['lol', 'lol'], {})
    .to('path', () => {});
// $ExpectType void
mdPdf()
    .concat.from.strings(['lol', 'lol'], {})
    .to('path', () => {});
// $ExpectType void
mdPdf()
    .from('path')
    .to.path('path', () => {});
// $ExpectType void
mdPdf().from('path').to('path');

// $ExpectType void
mdPdf()
    .from.string('markdown')
    .to.buffer(null, (err, buffer) => {
        buffer; // $ExpectType ArrayBuffer
    });

// @ts-expect-error
mdPdf({ paperFormat: 'wrongFormat' });
