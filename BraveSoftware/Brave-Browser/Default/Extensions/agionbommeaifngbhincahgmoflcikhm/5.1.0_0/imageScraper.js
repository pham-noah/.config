var __webpack_exports__ = {};
// Scrap images from a page
// Calling by background.js

(function () {
  var imageManager = {
    imageType: {
      IMG: 'IMG',
      TEXT: 'TEXT',
      LINK: 'LINK',
      INPUT_IMG: 'INPUT_IMG',
      BACKGROUND: 'BACKGROUND',
      DATAURL: 'DATAURL'
    },
    imgList: [],
    getImages: function getImages() {
      this.imgList = [];
      var imgs = document.getElementsByTagName('img');
      for (var i = 0; i < imgs.length; i++) {
        var img = imgs[i];
        var newImg = new Image();
        newImg.src = img.src;
        var width = 0;
        var height = 0;
        width = parseInt(img.naturalWidth);
        height = parseInt(img.naturalHeight);
        nwidth = parseInt(newImg.width);
        nheight = parseInt(newImg.height);
        width = nwidth > width ? nwidth : width;
        height = nheight > height ? nheight : height;
        this.addImg(imageManager.imageType.IMG, img.src, width, height);
      }
      imgs = document.images;
      if (imgs && imgs.length > 0) {
        for (var i = 0; i < imgs.length; i++) {
          try {
            var img = imgs[i];
            var newImg = new Image();
            newImg.src = img.currentSrc;
            var width = 0;
            var height = 0;
            width = parseInt(img.naturalWidth);
            height = parseInt(img.naturalHeight);
            nwidth = parseInt(newImg.width);
            nheight = parseInt(newImg.height);
            width = nwidth > width ? nwidth : width;
            height = nheight > height ? nheight : height;
            newImg = null;
            this.addImg(imageManager.imageType.IMG, img.currentSrc, width, height);
          } catch (e) {}
        }
      }
      try {
        imgs = imageManager.querySelectorAllShadows('img');
        if (imgs && imgs.length > 0) {
          for (var i = 0; i < imgs.length; i++) {
            try {
              var img = imgs[i];
              var newImg = new Image();
              newImg.src = img.currentSrc;
              var width = 0;
              var height = 0;
              width = parseInt(img.naturalWidth);
              height = parseInt(img.naturalHeight);
              nwidth = parseInt(newImg.width);
              nheight = parseInt(newImg.height);
              width = nwidth > width ? nwidth : width;
              height = nheight > height ? nheight : height;
              newImg = null;
              this.addImg(imageManager.imageType.IMG, img.currentSrc, width, height);
            } catch (e) {}
          }
        }
      } catch (e) {
        // experimental feature lets catch everything
      }
      var sources = document.getElementsByTagName('source');
      if (sources && sources.length > 0) {
        for (var i = 0; i < sources.length; i++) {
          try {
            var source = sources[i];
            if (!source.srcset) continue;
            var newImg = new Image();
            newImg.src = source.srcset;
            var width = parseInt(newImg.naturalWidth);
            var height = parseInt(newImg.naturalHeight);
            nwidth = parseInt(newImg.width);
            nheight = parseInt(newImg.height);
            width = nwidth > width ? nwidth : width;
            height = nheight > height ? nheight : height;
            this.addImg(imageManager.imageType.IMG, newImg.src, width, height);
            newImg = null;
          } catch (e) {}
        }
      }
      var srcsets = document.querySelectorAll('img[srcset]');
      if (srcsets && srcsets.length > 0) {
        for (var i = 0; i < srcsets.length; i++) {
          try {
            var img = srcsets[i];
            if (!img.srcset) continue;
            var srcset = img.srcset.split(',');
            for (var j = 0; j < srcset.length; j++) {
              try {
                var src = srcset[j];
                src = src.substring(0, src.indexOf(' ') != -1 ? src.indexOf(' ') : src.length);
                var newImg = new Image();
                newImg.src = src;
                src = newImg.src;
                var width = parseInt(newImg.naturalWidth);
                var height = parseInt(newImg.naturalHeight);
                nwidth = parseInt(newImg.width);
                nheight = parseInt(newImg.height);
                width = nwidth > width ? nwidth : width;
                height = nheight > height ? nheight : height;
                newImg = null;
                console.log("adding img from srcset: ".concat(src, " w: ").concat(width, " h:").concat(height));
                this.addImg(imageManager.imageType.IMG, src, width, height);
              } catch (e) {
                console.error('cannot add image of srcset: ');
              }
            }
          } catch (e) {}
        }
      }
      var inputs = document.getElementsByTagName('input');
      for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        var type = input.type;
        if (type.toUpperCase() == 'IMAGE') {
          var src = input.src;
          this.addImg(imageManager.imageType.INPUT_IMG, src, 0, 0);
        }
      }
      var links = document.getElementsByTagName('a');
      for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var href = link.href;
        if (href.endsWith('.jpg') || href.endsWith('.jpeg') || href.endsWith('.bmp') || href.endsWith('.ico') || href.endsWith('.gif') || href.endsWith('.png')) {
          this.addImg(imageManager.imageType.LINK, href, 0, 0);
        }
      }
      var svgs = document.getElementsByTagName('svg');
      for (var i = 0; i < svgs.length; i++) {
        var svg = svgs[i];
        var dataUrl = "data:image/svg+xml;base64,".concat(btoa(unescape(encodeURIComponent(svg.outerHTML))));
        this.addImg(imageManager.imageType.DATAURL, dataUrl, 0, 0);
      }
      var url;
      var B = [];
      var A = document.getElementsByTagName('*');
      A = B.slice.call(A, 0, A.length);
      while (A.length) {
        url = imageManager.deepCss(A.shift(), 'background-image');
        try {
          if (url && url != 'none') {
            var re = /url\(['"]?([^")]+)/g;
            var matches;
            while ((matches = re.exec(url)) != null) {
              var src = matches[1];
              if (src && imageManager.arrayIndexOf(B, src) == -1) {
                var newImg = new Image();
                newImg.src = src;
                src = newImg.src;
                this.addImg(imageManager.imageType.BACKGROUND, src, 0, 0);
              }
            }
          }
        } catch (e) {
          console.error('cannot add image background-image');
        }
      }
      url, B = [], A = document.getElementsByTagName('*');
      A = B.slice.call(A, 0, A.length);
      while (A.length) {
        url = imageManager.deepCss(A.shift(), 'background');
        try {
          if (url && url != 'none') {
            var re = /url\(['"]?([^")]+)/g;
            var matches;
            while ((matches = re.exec(url)) != null) {
              var src = matches[1];
              if (src && imageManager.arrayIndexOf(B, src) == -1) {
                var newImg = new Image();
                newImg.src = src;
                src = newImg.src;
                this.addImg(imageManager.imageType.BACKGROUND, src, 0, 0);
              }
            }
          }
        } catch (e) {
          console.error('cannot add image background-image');
        }
      }
      try {
        var urls = document.body.innerHTML.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?//=]*)/gi).filter(function (itm, i, a) {
          return i == a.indexOf(itm);
        });
        for (var i = 0; i < urls.length; i++) if (urls[i].match(/.*(\.png|\.svg|\.jpg|\.gif|\.jpeg|\.bmp|\.ico|\.webp|\.tif|\.apng|\.jfif|\.pjpeg|\.pjp).*/i) != null) this.addImg(imageManager.imageType.LINK, urls[i], 0, 0);
      } catch (e) {
        console.log("getImages error retreiving images by url: ".concat(e));
      }
      // move popup into html of the page
      /* https://github.com/mitchas/Keyframes.app/tree/master/Keyframes.app%20(Extension)/js
      $.get(chrome.extension.getURL('popup.html'), function (data) {
        debugger;
        $("body").append(data);
      });
      */
      return this.imgList;
    },
    addImg: function addImg(d, f, c, a) {
      this.imgList.push({
        type: d,
        src: f,
        width: c,
        height: a
      });
    },
    getUniqueImagesSrcs: function getUniqueImagesSrcs() {
      var images = imageManager.getImages();
      var imagesStrArray = new Array();
      for (var i = 0; i < images.length; i++) {
        imagesStrArray[imagesStrArray.length] = images[i].src;
      }
      var uniques = imagesStrArray.reverse().filter(function (e, i, arr) {
        return arr.indexOf(e, i + 1) === -1;
      }).reverse();
      return uniques;
    },
    deepCss: function deepCss(who, css) {
      if (!who || !who.style) return '';
      var sty = css.replace(/\-([a-z])/g, function (a, b) {
        return b.toUpperCase();
      });
      if (who.currentStyle) {
        return who.style[sty] || who.currentStyle[sty] || '';
      }
      var dv = document.defaultView || window;
      return who.style[sty] || dv.getComputedStyle(who, '').getPropertyValue(css) || '';
    },
    arrayIndexOf: function arrayIndexOf(array, what, index) {
      index = index || 0;
      var L = array.length;
      while (index < L) {
        if (array[index] === what) return index;
        ++index;
      }
      return -1;
    },
    querySelectorAllShadows: function querySelectorAllShadows(selector) {
      var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;
      // recurse on childShadows
      var childShadows = Array.from(el.querySelectorAll('*')).map(function (el) {
        return el.shadowRoot;
      }).filter(Boolean);

      // console.log('[querySelectorAllShadows]', selector, el, `(${childShadows.length} shadowRoots)`);

      var childResults = childShadows.map(function (child) {
        return imageManager.querySelectorAllShadows(selector, child);
      });

      // fuse all results into singular, flat array
      var result = Array.from(el.querySelectorAll(selector));
      return result.concat(childResults).flat();
    }
  };
  var result = {
    images: imageManager.getUniqueImagesSrcs(),
    title: document.title,
    isTop: window.top == window.self,
    origin: window.location.origin
  };
  try {
    result.isArc = getComputedStyle(document.documentElement).getPropertyValue('--arc-palette-title');
  } catch (e) {
    // empty string
  }
  return result;
})();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VTY3JhcGVyLmpzIiwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFHQTs7QUFFQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1hZ2V5ZS8uL3NyYy9sZWdhY3kvaW1hZ2VTY3JhcGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFNjcmFwIGltYWdlcyBmcm9tIGEgcGFnZVxuLy8gQ2FsbGluZyBieSBiYWNrZ3JvdW5kLmpzXG5cbigoKSA9PiB7XG4gIHZhciBpbWFnZU1hbmFnZXIgPSB7XG4gICAgaW1hZ2VUeXBlOiB7XG4gICAgICBJTUc6ICdJTUcnLFxuICAgICAgVEVYVDogJ1RFWFQnLFxuICAgICAgTElOSzogJ0xJTksnLFxuICAgICAgSU5QVVRfSU1HOiAnSU5QVVRfSU1HJyxcbiAgICAgIEJBQ0tHUk9VTkQ6ICdCQUNLR1JPVU5EJyxcbiAgICAgIERBVEFVUkw6ICdEQVRBVVJMJyxcbiAgICB9LFxuICAgIGltZ0xpc3Q6IFtdLFxuICAgIGdldEltYWdlcygpIHtcbiAgICAgIHRoaXMuaW1nTGlzdCA9IFtdO1xuICAgICAgbGV0IGltZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJyk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGltZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGltZyA9IGltZ3NbaV07XG4gICAgICAgIHZhciBuZXdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbmV3SW1nLnNyYyA9IGltZy5zcmM7XG4gICAgICAgIHZhciB3aWR0aCA9IDA7XG4gICAgICAgIHZhciBoZWlnaHQgPSAwO1xuICAgICAgICB3aWR0aCA9IHBhcnNlSW50KGltZy5uYXR1cmFsV2lkdGgpO1xuICAgICAgICBoZWlnaHQgPSBwYXJzZUludChpbWcubmF0dXJhbEhlaWdodCk7XG4gICAgICAgIG53aWR0aCA9IHBhcnNlSW50KG5ld0ltZy53aWR0aCk7XG4gICAgICAgIG5oZWlnaHQgPSBwYXJzZUludChuZXdJbWcuaGVpZ2h0KTtcbiAgICAgICAgd2lkdGggPSBud2lkdGggPiB3aWR0aCA/IG53aWR0aCA6IHdpZHRoO1xuICAgICAgICBoZWlnaHQgPSBuaGVpZ2h0ID4gaGVpZ2h0ID8gbmhlaWdodCA6IGhlaWdodDtcbiAgICAgICAgdGhpcy5hZGRJbWcoaW1hZ2VNYW5hZ2VyLmltYWdlVHlwZS5JTUcsIGltZy5zcmMsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgfVxuICAgICAgaW1ncyA9IGRvY3VtZW50LmltYWdlcztcbiAgICAgIGlmIChpbWdzICYmIGltZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGltZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGltZyA9IGltZ3NbaV07XG4gICAgICAgICAgICB2YXIgbmV3SW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBuZXdJbWcuc3JjID0gaW1nLmN1cnJlbnRTcmM7XG4gICAgICAgICAgICB2YXIgd2lkdGggPSAwO1xuICAgICAgICAgICAgdmFyIGhlaWdodCA9IDA7XG4gICAgICAgICAgICB3aWR0aCA9IHBhcnNlSW50KGltZy5uYXR1cmFsV2lkdGgpO1xuICAgICAgICAgICAgaGVpZ2h0ID0gcGFyc2VJbnQoaW1nLm5hdHVyYWxIZWlnaHQpO1xuICAgICAgICAgICAgbndpZHRoID0gcGFyc2VJbnQobmV3SW1nLndpZHRoKTtcbiAgICAgICAgICAgIG5oZWlnaHQgPSBwYXJzZUludChuZXdJbWcuaGVpZ2h0KTtcbiAgICAgICAgICAgIHdpZHRoID0gbndpZHRoID4gd2lkdGggPyBud2lkdGggOiB3aWR0aDtcbiAgICAgICAgICAgIGhlaWdodCA9IG5oZWlnaHQgPiBoZWlnaHQgPyBuaGVpZ2h0IDogaGVpZ2h0O1xuICAgICAgICAgICAgbmV3SW1nID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuYWRkSW1nKGltYWdlTWFuYWdlci5pbWFnZVR5cGUuSU1HLCBpbWcuY3VycmVudFNyYywgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgaW1ncyA9IGltYWdlTWFuYWdlci5xdWVyeVNlbGVjdG9yQWxsU2hhZG93cygnaW1nJyk7XG4gICAgICAgIGlmIChpbWdzICYmIGltZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW1ncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdmFyIGltZyA9IGltZ3NbaV07XG4gICAgICAgICAgICAgIHZhciBuZXdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgbmV3SW1nLnNyYyA9IGltZy5jdXJyZW50U3JjO1xuICAgICAgICAgICAgICB2YXIgd2lkdGggPSAwO1xuICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gMDtcbiAgICAgICAgICAgICAgd2lkdGggPSBwYXJzZUludChpbWcubmF0dXJhbFdpZHRoKTtcbiAgICAgICAgICAgICAgaGVpZ2h0ID0gcGFyc2VJbnQoaW1nLm5hdHVyYWxIZWlnaHQpO1xuICAgICAgICAgICAgICBud2lkdGggPSBwYXJzZUludChuZXdJbWcud2lkdGgpO1xuICAgICAgICAgICAgICBuaGVpZ2h0ID0gcGFyc2VJbnQobmV3SW1nLmhlaWdodCk7XG4gICAgICAgICAgICAgIHdpZHRoID0gbndpZHRoID4gd2lkdGggPyBud2lkdGggOiB3aWR0aDtcbiAgICAgICAgICAgICAgaGVpZ2h0ID0gbmhlaWdodCA+IGhlaWdodCA/IG5oZWlnaHQgOiBoZWlnaHQ7XG4gICAgICAgICAgICAgIG5ld0ltZyA9IG51bGw7XG4gICAgICAgICAgICAgIHRoaXMuYWRkSW1nKGltYWdlTWFuYWdlci5pbWFnZVR5cGUuSU1HLCBpbWcuY3VycmVudFNyYywgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBleHBlcmltZW50YWwgZmVhdHVyZSBsZXRzIGNhdGNoIGV2ZXJ5dGhpbmdcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNvdXJjZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc291cmNlJyk7XG4gICAgICBpZiAoc291cmNlcyAmJiBzb3VyY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXNbaV07XG4gICAgICAgICAgICBpZiAoIXNvdXJjZS5zcmNzZXQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIG5ld0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgbmV3SW1nLnNyYyA9IHNvdXJjZS5zcmNzZXQ7XG4gICAgICAgICAgICB2YXIgd2lkdGggPSBwYXJzZUludChuZXdJbWcubmF0dXJhbFdpZHRoKTtcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSBwYXJzZUludChuZXdJbWcubmF0dXJhbEhlaWdodCk7XG4gICAgICAgICAgICBud2lkdGggPSBwYXJzZUludChuZXdJbWcud2lkdGgpO1xuICAgICAgICAgICAgbmhlaWdodCA9IHBhcnNlSW50KG5ld0ltZy5oZWlnaHQpO1xuICAgICAgICAgICAgd2lkdGggPSBud2lkdGggPiB3aWR0aCA/IG53aWR0aCA6IHdpZHRoO1xuICAgICAgICAgICAgaGVpZ2h0ID0gbmhlaWdodCA+IGhlaWdodCA/IG5oZWlnaHQgOiBoZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmFkZEltZyhpbWFnZU1hbmFnZXIuaW1hZ2VUeXBlLklNRywgbmV3SW1nLnNyYywgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgICBuZXdJbWcgPSBudWxsO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3Jjc2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZ1tzcmNzZXRdJyk7XG4gICAgICBpZiAoc3Jjc2V0cyAmJiBzcmNzZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcmNzZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBpbWcgPSBzcmNzZXRzW2ldO1xuICAgICAgICAgICAgaWYgKCFpbWcuc3Jjc2V0KSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IHNyY3NldCA9IGltZy5zcmNzZXQuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3Jjc2V0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIHNyYyA9IHNyY3NldFtqXTtcbiAgICAgICAgICAgICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKDAsIHNyYy5pbmRleE9mKCcgJykgIT0gLTEgPyBzcmMuaW5kZXhPZignICcpIDogc3JjLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIG5ld0ltZy5zcmMgPSBzcmM7XG4gICAgICAgICAgICAgICAgc3JjID0gbmV3SW1nLnNyYztcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSBwYXJzZUludChuZXdJbWcubmF0dXJhbFdpZHRoKTtcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQobmV3SW1nLm5hdHVyYWxIZWlnaHQpO1xuICAgICAgICAgICAgICAgIG53aWR0aCA9IHBhcnNlSW50KG5ld0ltZy53aWR0aCk7XG4gICAgICAgICAgICAgICAgbmhlaWdodCA9IHBhcnNlSW50KG5ld0ltZy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIHdpZHRoID0gbndpZHRoID4gd2lkdGggPyBud2lkdGggOiB3aWR0aDtcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSBuaGVpZ2h0ID4gaGVpZ2h0ID8gbmhlaWdodCA6IGhlaWdodDtcbiAgICAgICAgICAgICAgICBuZXdJbWcgPSBudWxsO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBhZGRpbmcgaW1nIGZyb20gc3Jjc2V0OiAke3NyY30gdzogJHt3aWR0aH0gaDoke2hlaWdodH1gKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEltZyhpbWFnZU1hbmFnZXIuaW1hZ2VUeXBlLklNRywgc3JjLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Nhbm5vdCBhZGQgaW1hZ2Ugb2Ygc3Jjc2V0OiAnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGlucHV0c1tpXTtcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBpbnB1dDtcbiAgICAgICAgaWYgKHR5cGUudG9VcHBlckNhc2UoKSA9PSAnSU1BR0UnKSB7XG4gICAgICAgICAgdmFyIHsgc3JjIH0gPSBpbnB1dDtcbiAgICAgICAgICB0aGlzLmFkZEltZyhpbWFnZU1hbmFnZXIuaW1hZ2VUeXBlLklOUFVUX0lNRywgc3JjLCAwLCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07XG4gICAgICAgIGNvbnN0IHsgaHJlZiB9ID0gbGluaztcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGhyZWYuZW5kc1dpdGgoJy5qcGcnKSB8fFxuICAgICAgICAgIGhyZWYuZW5kc1dpdGgoJy5qcGVnJykgfHxcbiAgICAgICAgICBocmVmLmVuZHNXaXRoKCcuYm1wJykgfHxcbiAgICAgICAgICBocmVmLmVuZHNXaXRoKCcuaWNvJykgfHxcbiAgICAgICAgICBocmVmLmVuZHNXaXRoKCcuZ2lmJykgfHxcbiAgICAgICAgICBocmVmLmVuZHNXaXRoKCcucG5nJylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5hZGRJbWcoaW1hZ2VNYW5hZ2VyLmltYWdlVHlwZS5MSU5LLCBocmVmLCAwLCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3Qgc3ZncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzdmcnKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3Zncy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzdmcgPSBzdmdzW2ldO1xuICAgICAgICBjb25zdCBkYXRhVXJsID0gYGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHtidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdmcub3V0ZXJIVE1MKSkpfWA7XG4gICAgICAgIHRoaXMuYWRkSW1nKGltYWdlTWFuYWdlci5pbWFnZVR5cGUuREFUQVVSTCwgZGF0YVVybCwgMCwgMCk7XG4gICAgICB9XG4gICAgICBsZXQgdXJsO1xuICAgICAgbGV0IEIgPSBbXTtcbiAgICAgIGxldCBBID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKTtcbiAgICAgIEEgPSBCLnNsaWNlLmNhbGwoQSwgMCwgQS5sZW5ndGgpO1xuICAgICAgd2hpbGUgKEEubGVuZ3RoKSB7XG4gICAgICAgIHVybCA9IGltYWdlTWFuYWdlci5kZWVwQ3NzKEEuc2hpZnQoKSwgJ2JhY2tncm91bmQtaW1hZ2UnKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAodXJsICYmIHVybCAhPSAnbm9uZScpIHtcbiAgICAgICAgICAgIHZhciByZSA9IC91cmxcXChbJ1wiXT8oW15cIildKykvZztcbiAgICAgICAgICAgIHZhciBtYXRjaGVzO1xuICAgICAgICAgICAgd2hpbGUgKChtYXRjaGVzID0gcmUuZXhlYyh1cmwpKSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIHZhciBzcmMgPSBtYXRjaGVzWzFdO1xuICAgICAgICAgICAgICBpZiAoc3JjICYmIGltYWdlTWFuYWdlci5hcnJheUluZGV4T2YoQiwgc3JjKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIHZhciBuZXdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBuZXdJbWcuc3JjID0gc3JjO1xuICAgICAgICAgICAgICAgIHNyYyA9IG5ld0ltZy5zcmM7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRJbWcoaW1hZ2VNYW5hZ2VyLmltYWdlVHlwZS5CQUNLR1JPVU5ELCBzcmMsIDAsIDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignY2Fubm90IGFkZCBpbWFnZSBiYWNrZ3JvdW5kLWltYWdlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdXJsLCAoQiA9IFtdKSwgKEEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpKTtcbiAgICAgIEEgPSBCLnNsaWNlLmNhbGwoQSwgMCwgQS5sZW5ndGgpO1xuICAgICAgd2hpbGUgKEEubGVuZ3RoKSB7XG4gICAgICAgIHVybCA9IGltYWdlTWFuYWdlci5kZWVwQ3NzKEEuc2hpZnQoKSwgJ2JhY2tncm91bmQnKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAodXJsICYmIHVybCAhPSAnbm9uZScpIHtcbiAgICAgICAgICAgIHZhciByZSA9IC91cmxcXChbJ1wiXT8oW15cIildKykvZztcbiAgICAgICAgICAgIHZhciBtYXRjaGVzO1xuICAgICAgICAgICAgd2hpbGUgKChtYXRjaGVzID0gcmUuZXhlYyh1cmwpKSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIHZhciBzcmMgPSBtYXRjaGVzWzFdO1xuICAgICAgICAgICAgICBpZiAoc3JjICYmIGltYWdlTWFuYWdlci5hcnJheUluZGV4T2YoQiwgc3JjKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIHZhciBuZXdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBuZXdJbWcuc3JjID0gc3JjO1xuICAgICAgICAgICAgICAgIHNyYyA9IG5ld0ltZy5zcmM7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRJbWcoaW1hZ2VNYW5hZ2VyLmltYWdlVHlwZS5CQUNLR1JPVU5ELCBzcmMsIDAsIDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignY2Fubm90IGFkZCBpbWFnZSBiYWNrZ3JvdW5kLWltYWdlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVybHMgPSBkb2N1bWVudC5ib2R5LmlubmVySFRNTFxuICAgICAgICAgIC5tYXRjaCgvaHR0cHM/OlxcL1xcLyh3d3dcXC4pP1stYS16QS1aMC05QDolLl9cXCt+Iz1dezIsMjU2fVxcLlthLXpdezIsNH1cXGIoWy1hLXpBLVowLTlAOiVfXFwrLn4jPy8vPV0qKS9naSlcbiAgICAgICAgICAuZmlsdGVyKChpdG0sIGksIGEpID0+IGkgPT0gYS5pbmRleE9mKGl0bSkpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHVybHMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdXJsc1tpXS5tYXRjaChcbiAgICAgICAgICAgICAgLy4qKFxcLnBuZ3xcXC5zdmd8XFwuanBnfFxcLmdpZnxcXC5qcGVnfFxcLmJtcHxcXC5pY298XFwud2VicHxcXC50aWZ8XFwuYXBuZ3xcXC5qZmlmfFxcLnBqcGVnfFxcLnBqcCkuKi9pLFxuICAgICAgICAgICAgKSAhPSBudWxsXG4gICAgICAgICAgKVxuICAgICAgICAgICAgdGhpcy5hZGRJbWcoaW1hZ2VNYW5hZ2VyLmltYWdlVHlwZS5MSU5LLCB1cmxzW2ldLCAwLCAwKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYGdldEltYWdlcyBlcnJvciByZXRyZWl2aW5nIGltYWdlcyBieSB1cmw6ICR7ZX1gKTtcbiAgICAgIH1cbiAgICAgIC8vIG1vdmUgcG9wdXAgaW50byBodG1sIG9mIHRoZSBwYWdlXG4gICAgICAvKiBodHRwczovL2dpdGh1Yi5jb20vbWl0Y2hhcy9LZXlmcmFtZXMuYXBwL3RyZWUvbWFzdGVyL0tleWZyYW1lcy5hcHAlMjAoRXh0ZW5zaW9uKS9qc1xuICAgICQuZ2V0KGNocm9tZS5leHRlbnNpb24uZ2V0VVJMKCdwb3B1cC5odG1sJyksIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAkKFwiYm9keVwiKS5hcHBlbmQoZGF0YSk7XG4gICAgfSk7XG4gICAgKi9cbiAgICAgIHJldHVybiB0aGlzLmltZ0xpc3Q7XG4gICAgfSxcbiAgICBhZGRJbWcoZCwgZiwgYywgYSkge1xuICAgICAgdGhpcy5pbWdMaXN0LnB1c2goe1xuICAgICAgICB0eXBlOiBkLFxuICAgICAgICBzcmM6IGYsXG4gICAgICAgIHdpZHRoOiBjLFxuICAgICAgICBoZWlnaHQ6IGEsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldFVuaXF1ZUltYWdlc1NyY3MoKSB7XG4gICAgICBjb25zdCBpbWFnZXMgPSBpbWFnZU1hbmFnZXIuZ2V0SW1hZ2VzKCk7XG4gICAgICBjb25zdCBpbWFnZXNTdHJBcnJheSA9IG5ldyBBcnJheSgpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaW1hZ2VzU3RyQXJyYXlbaW1hZ2VzU3RyQXJyYXkubGVuZ3RoXSA9IGltYWdlc1tpXS5zcmM7XG4gICAgICB9XG4gICAgICBjb25zdCB1bmlxdWVzID0gaW1hZ2VzU3RyQXJyYXlcbiAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAuZmlsdGVyKChlLCBpLCBhcnIpID0+IGFyci5pbmRleE9mKGUsIGkgKyAxKSA9PT0gLTEpXG4gICAgICAgIC5yZXZlcnNlKCk7XG4gICAgICByZXR1cm4gdW5pcXVlcztcbiAgICB9LFxuICAgIGRlZXBDc3Mod2hvLCBjc3MpIHtcbiAgICAgIGlmICghd2hvIHx8ICF3aG8uc3R5bGUpIHJldHVybiAnJztcbiAgICAgIGNvbnN0IHN0eSA9IGNzcy5yZXBsYWNlKC9cXC0oW2Etel0pL2csIChhLCBiKSA9PiBiLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgaWYgKHdoby5jdXJyZW50U3R5bGUpIHtcbiAgICAgICAgcmV0dXJuIHdoby5zdHlsZVtzdHldIHx8IHdoby5jdXJyZW50U3R5bGVbc3R5XSB8fCAnJztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGR2ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93O1xuICAgICAgcmV0dXJuIHdoby5zdHlsZVtzdHldIHx8IGR2LmdldENvbXB1dGVkU3R5bGUod2hvLCAnJykuZ2V0UHJvcGVydHlWYWx1ZShjc3MpIHx8ICcnO1xuICAgIH0sXG4gICAgYXJyYXlJbmRleE9mKGFycmF5LCB3aGF0LCBpbmRleCkge1xuICAgICAgaW5kZXggPSBpbmRleCB8fCAwO1xuICAgICAgY29uc3QgTCA9IGFycmF5Lmxlbmd0aDtcbiAgICAgIHdoaWxlIChpbmRleCA8IEwpIHtcbiAgICAgICAgaWYgKGFycmF5W2luZGV4XSA9PT0gd2hhdCkgcmV0dXJuIGluZGV4O1xuICAgICAgICArK2luZGV4O1xuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH0sXG4gICAgcXVlcnlTZWxlY3RvckFsbFNoYWRvd3Moc2VsZWN0b3IsIGVsID0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgLy8gcmVjdXJzZSBvbiBjaGlsZFNoYWRvd3NcbiAgICAgIGNvbnN0IGNoaWxkU2hhZG93cyA9IEFycmF5LmZyb20oZWwucXVlcnlTZWxlY3RvckFsbCgnKicpKVxuICAgICAgICAubWFwKGVsID0+IGVsLnNoYWRvd1Jvb3QpXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbik7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdbcXVlcnlTZWxlY3RvckFsbFNoYWRvd3NdJywgc2VsZWN0b3IsIGVsLCBgKCR7Y2hpbGRTaGFkb3dzLmxlbmd0aH0gc2hhZG93Um9vdHMpYCk7XG5cbiAgICAgIGNvbnN0IGNoaWxkUmVzdWx0cyA9IGNoaWxkU2hhZG93cy5tYXAoY2hpbGQgPT4gaW1hZ2VNYW5hZ2VyLnF1ZXJ5U2VsZWN0b3JBbGxTaGFkb3dzKHNlbGVjdG9yLCBjaGlsZCkpO1xuXG4gICAgICAvLyBmdXNlIGFsbCByZXN1bHRzIGludG8gc2luZ3VsYXIsIGZsYXQgYXJyYXlcbiAgICAgIGNvbnN0IHJlc3VsdCA9IEFycmF5LmZyb20oZWwucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuICAgICAgcmV0dXJuIHJlc3VsdC5jb25jYXQoY2hpbGRSZXN1bHRzKS5mbGF0KCk7XG4gICAgfSxcbiAgfTtcblxuICBjb25zdCByZXN1bHQgPSB7XG4gICAgaW1hZ2VzOiBpbWFnZU1hbmFnZXIuZ2V0VW5pcXVlSW1hZ2VzU3JjcygpLFxuICAgIHRpdGxlOiBkb2N1bWVudC50aXRsZSxcbiAgICBpc1RvcDogd2luZG93LnRvcCA9PSB3aW5kb3cuc2VsZixcbiAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sXG4gIH07XG5cbiAgdHJ5IHtcbiAgICByZXN1bHQuaXNBcmMgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1hcmMtcGFsZXR0ZS10aXRsZScpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gZW1wdHkgc3RyaW5nXG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==