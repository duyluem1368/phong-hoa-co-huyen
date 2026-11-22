/* pred-core.js — Thư viện chấm dự đoán hiện tượng thí nghiệm.
   Dùng chung cho trang preview và kiểm thử tự động. */
(function (global) {
  'use strict';

  var NEGATORS = ['không', 'chẳng', 'ko', 'chưa', 'đừng', 'khô'];

  var PHENOMENA = {
    gas: {
      label: 'Có khí thoát ra',
      keywords: ['sủi bọt', 'bọt khí', 'bọt gas', 'thoát ra khí', 'khí thoát ra', 'có khí', 'nổi bọt', 'sôi', 'bay ra'],
      hint: 'sủi bọt khí, có bọt, khí thoát ra'
    },
    precipitate: {
      label: 'Tạo kết tủa',
      keywords: ['kết tủa', 'vẩn đục', 'trắng đục', 'lắng xuống', 'đục', 'chất rắn tách ra', 'mất trong'],
      hint: 'xuất hiện kết tủa, dung dịch vẩn đục'
    },
    color: {
      label: 'Dung dịch đổi màu',
      keywords: ['đổi màu', 'chuyển màu', 'màu xanh', 'xanh lam', 'xanh nâu', 'nâu đỏ', 'màu vàng', 'vàng nâu', 'màu hồng', 'màu tím', 'mất màu', 'màu nâu'],
      hint: 'dung dịch đổi màu, xuất hiện màu lạ'
    },
    heat: {
      label: 'Tỏa nhiệt / cháy sáng',
      keywords: ['ấm lên', 'nóng lên', 'tỏa nhiệt', 'cháy sáng', 'ánh sáng chói', 'bùng cháy', 'nhiệt độ tăng', 'thấy nóng', 'ấm hơn'],
      hint: 'dung dịch ấm lên, tỏa nhiệt'
    },
    absorb: {
      label: 'Khí bị hấp thụ',
      keywords: ['hấp thụ', 'thu khí', 'giảm thể tích', 'mất màu khí'],
      hint: 'khí bị hấp thụ'
    },
    none: {
      label: 'Không có hiện tượng',
      keywords: ['không có hiện tượng', 'không hiện tượng', 'không có phản ứng', 'không phản ứng', 'vẫn trong', 'không thấy gì', 'không có gì', 'không đổi màu', 'không có kết tủa', 'không có khí', 'không sủi bọt', 'không nóng'],
      hint: 'không có hiện tượng, dung dịch vẫn trong'
    }
  };

  function normalizeText(t) {
    return String(t == null ? '' : t).toLowerCase().normalize('NFC').replace(/\s+/g, ' ').trim();
  }

  function splitClauses(text) {
    return text
      .split(/[,.;:!?\n\r]+|\brồi\b|\bvà\b|\bcùng\b/)
      .map(function (s) { return s.trim(); })
      .filter(Boolean);
  }

  function isNegated(before) {
    var words = before.split(/\s+/).filter(Boolean).slice(-3);
    for (var i = 0; i < words.length; i++) {
      for (var j = 0; j < NEGATORS.length; j++) {
        if (words[i].indexOf(NEGATORS[j]) === 0) return true;
      }
    }
    return false;
  }

  // Trả về { type: 'yes' | 'no' } — học sinh khẳng định hay phủ định từng hiện tượng.
  function findAssertions(rawText) {
    var text = normalizeText(rawText);
    var out = {};
    splitClauses(text).forEach(function (clause) {
      Object.keys(PHENOMENA).forEach(function (type) {
        var kws = PHENOMENA[type].keywords;
        for (var i = 0; i < kws.length; i++) {
          var idx = clause.indexOf(kws[i]);
          if (idx === -1) continue;
          var negated = isNegated(clause.slice(0, idx));
          if (negated) {
            if (out[type] !== 'yes') out[type] = 'no';
          } else {
            out[type] = 'yes';
          }
        }
      });
    });
    return out;
  }

  function evaluatePrediction(rawText, reactionType) {
    var text = normalizeText(rawText);
    if (!text) {
      return { status: 'empty', correct: false, detected: {}, actual: reactionType };
    }

    var detected = findAssertions(text);
    var others = Object.keys(PHENOMENA).filter(function (t) { return t !== reactionType; });
    var wrongType = others.filter(function (t) { return detected[t] === 'yes'; });

    var correct = reactionType === 'none'
      ? detected.none === 'yes' && wrongType.length === 0
      : detected[reactionType] === 'yes' && wrongType.length === 0;

    if (!correct && detected[reactionType] !== 'yes' && wrongType.length === 0) {
      return { status: 'unclear', correct: false, detected: detected, actual: reactionType };
    }
    return { status: 'checked', correct: correct, detected: detected, actual: reactionType };
  }

  var api = {
    PHENOMENA: PHENOMENA,
    normalizeText: normalizeText,
    findAssertions: findAssertions,
    evaluatePrediction: evaluatePrediction
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  global.PredictionCore = api;
})(typeof window !== 'undefined' ? window : globalThis);