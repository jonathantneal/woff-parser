module.exports = function (unicoderange) {
	var ranges = [];
	if (unicoderange & 0x00000001) ranges.push("Superscripts And Subscripts");
	if (unicoderange & 0x00000002) ranges.push("Currency Symbols");
	if (unicoderange & 0x00000004) ranges.push("Combining Diacritical Marks For Symbols");
	if (unicoderange & 0x00000008) ranges.push("Letterlike Symbols");
	if (unicoderange & 0x00000010) ranges.push("Number Forms");
	if (unicoderange & 0x00000020) ranges.push("Arrows");
	if (unicoderange & 0x00000040) ranges.push("Mathematical Operators");
	if (unicoderange & 0x00000080) ranges.push("Miscellaneous Technical");
	if (unicoderange & 0x00000100) ranges.push("Control Pictures");
	if (unicoderange & 0x00000200) ranges.push("Optical Character Recognition");
	if (unicoderange & 0x00000400) ranges.push("Enclosed Alphanumerics");
	if (unicoderange & 0x00000800) ranges.push("Box Drawing");
	if (unicoderange & 0x00001000) ranges.push("Block Elements");
	if (unicoderange & 0x00002000) ranges.push("Geometric Shapes");
	if (unicoderange & 0x00004000) ranges.push("Miscellaneous Symbols");
	if (unicoderange & 0x00008000) ranges.push("Dingbats");
	if (unicoderange & 0x00010000) ranges.push("CJK Symbols And Punctuation");
	if (unicoderange & 0x00020000) ranges.push("Hiragana");
	if (unicoderange & 0x00040000) ranges.push("Katakana");
	if (unicoderange & 0x00080000) ranges.push("Bopomofo");
	if (unicoderange & 0x00100000) ranges.push("Hangul Compatibility Jamo");
	if (unicoderange & 0x00200000) ranges.push("Phags-pa");
	if (unicoderange & 0x00400000) ranges.push("Enclosed CJK Letters And Months");
	if (unicoderange & 0x00800000) ranges.push("CJK Compatibility");
	if (unicoderange & 0x01000000) ranges.push("Hangul Syllables");
	if (unicoderange & 0x02000000) ranges.push("Non-Plane 0");
	if (unicoderange & 0x04000000) ranges.push("Phoenician");
	if (unicoderange & 0x08000000) ranges.push("CJK Unified Ideographs");
	if (unicoderange & 0x10000000) ranges.push("Private Use Area (plane 0)");
	if (unicoderange & 0x20000000) ranges.push("CJK Strokes");
	if (unicoderange & 0x40000000) ranges.push("Alphabetic Presentation Forms");
	if (unicoderange & 0x80000000) ranges.push("Arabic Presentation Forms-A");
	return ranges;
};