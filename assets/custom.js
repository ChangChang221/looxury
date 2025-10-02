document.addEventListener('DOMContentLoaded', function () {
  var giftWrappingCheckbox = document.getElementById('gift-wrapping');
  var giftWrappingText = document.querySelector('#custom-engraving .gift-wrapping-text');
  var engravingCheckbox = document.getElementById('custom-engraving-checkbox');
  var engravingText = document.querySelector('#custom-engraving .engraving-text');
  var engravingStyle = document.querySelector('#custom-engraving .engraving-style');

  if(giftWrappingCheckbox){
    giftWrappingCheckbox.addEventListener('change', function () {
      // toggleClass(giftWrappingText, 'hide');
      
      if (this.checked) {
        if(document.querySelector('#custom-engraving .gift-wrapping-option')){
          // var style = document.querySelector('#custom-engraving .gift-wrapping-option.selected .option-label').textContent.trim();
          this.insertAdjacentHTML('afterend', '<input type="hidden" name="properties[Gift Wrapping Style]" value=" "/>');
          this.insertAdjacentHTML('afterend', '<input type="hidden" name="properties[Gift Wrapping]" value="Yes"/>');
        }
        document.querySelector('#custom-engraving .gift-wrapping-text input').name = 'properties[Gift Wrapping Note]';
        document.querySelector('#custom-engraving .gift-wrapping-text input').required = true;
        document.querySelector('#gift-wrapping-id').name = 'properties[Gift Wrapping ID]';
      } else {
        removeElement('form.product-form input[name="properties[Gift Wrapping Style]"]');
        document.querySelector('#custom-engraving .gift-wrapping-text input').name = '';
        document.querySelector('#custom-engraving .gift-wrapping-text input').required = false;
        document.querySelector('#custom-engraving .gift-wrapping-text input').value = '';
        document.querySelector('#gift-wrapping-id').name = '';
      }
    });
  }

  if(engravingCheckbox){
    engravingCheckbox.addEventListener('change', function () {
      // toggleClass(engravingText, 'hide');
      // toggleClass(engravingStyle, 'hide');
      
      if (this.checked) {
        var style = document.querySelector('#custom-engraving .engraving-option.selected .option-label').textContent.trim();
        console.log("style1", style);
        this.insertAdjacentHTML('afterend', '<input type="hidden" name="properties[Engraving Style]" value="' + style + '"/>');
        this.insertAdjacentHTML('afterend', '<input type="hidden" name="properties[Custom Engraving]" value="Yes"/>');
        document.querySelector('#custom-engraving .engraving-input').name = 'properties[Engraving Note]';
        document.querySelector('#custom-engraving .engraving-input').required = true;
        document.querySelector('#engraving-variant-id').name = 'properties[Engraving Variant ID]';
      } else {
        removeElement('form.product-form input[name="properties[Custom Engraving]"]');
        removeElement('form.product-form input[name="properties[Engraving Style]"]');
        document.querySelector('#custom-engraving .engraving-input').name = '';
        document.querySelector('#custom-engraving .engraving-input').required = false;
        document.querySelector('#custom-engraving .engraving-input').value = '';
        document.querySelector('#engraving-variant-id').name = '';
      }
    });
  }

  document.querySelectorAll('#custom-engraving .engraving-option .option-label').forEach(function (img) {
    img.addEventListener('click', function () {
      var option = this.closest('.engraving-option');
      var textLimit = option.dataset.textLimit;
      document.querySelectorAll('#custom-engraving .engraving-option').forEach(function (opt) {
        opt.classList.remove('selected');
      });
      option.classList.add('selected');
      document.querySelector('#custom-engraving .engraving-input').value = '';
      document.querySelector('#custom-engraving .engraving-input').maxLength = textLimit;
      // document.querySelector('#custom-engraving .engraving-input-limit').textContent = textLimit;
      var style = option.querySelector('.option-label').textContent.trim();
      document.querySelector('input[name="properties[Engraving Style]"]').value = style;
    });
  });

  document.querySelectorAll('#custom-engraving .gift-wrapping-option .option-label').forEach(function (img) {
    img.addEventListener('click', function () {
      console.log("hihi");
      var option = this.closest('.gift-wrapping-option');
      var textLimit = option.dataset.textLimit;
      document.querySelectorAll('#custom-engraving .gift-wrapping-option').forEach(function (opt) {
        opt.classList.remove('selected');
      });
      option.classList.add('selected');
      document.querySelector('#custom-engraving .gift-wrapping-input').value = '';
      var style = option.querySelector('.option-label').textContent.trim();
      document.querySelector('input[name="properties[Gift Wrapping Style]"]').value = style;
    });
  });

  function toggleClass(element, className) {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    } else {
      element.classList.add(className);
    }
  }

  function removeElement(selector) {
    var element = document.querySelector(selector);
    if (element) {
      element.remove();
    }
  }
});
