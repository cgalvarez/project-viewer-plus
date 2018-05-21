'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _atom = require('atom');

var _etch = require('etch');

var _etch2 = _interopRequireDefault(_etch);

var _icons = require('./../constants/icons');

var _icons2 = _interopRequireDefault(_icons);

var _icon = require('./../components/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /** @jsx etch.dom */

/**
 *
 */
let IconsContainer = class IconsContainer {
  /**
   *
   * @param {Object} props - description
   */
  constructor(props) {
    this.props = props;
    this.filterIcons();
    this.disposables = new _atom.CompositeDisposable();
    this.emitter = new _atom.Emitter();

    _etch2.default.initialize(this);
  }

  /**
   *
   */
  destroy() {
    var _this = this;

    return _asyncToGenerator(function* () {
      yield _etch2.default.destroy(_this);
    })();
  }

  /**
   *
   * @param {Object} props - description
   * @returns {Object} description
   */
  update(props) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      if (props) {
        _this2.props = props;
        return _etch2.default.update(_this2);
      }

      return Promise.resolve();
    })();
  }

  /**
   *
   * @returns {Object} description
   */
  get events() {
    return {
      search: () => this.filterIcons(),
      keyup: event => this.filterIcons(event.target.value)
    };
  }

  /**
   *
   * @param {string} filter - description
   */
  filterIcons(filter) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      _this3.icons = [];

      _icons2.default.forEach(function (icon) {
        const finding = icon.replace('-icon', '');

        if (!filter || !filter.length || finding.includes(filter)) {
          _this3.icons.push(_etch2.default.dom(_icon2.default, { icon: icon, onIconClick: _this3.props.onIconClick }));
        }
      });

      _etch2.default.update(_this3);
    })();
  }

  /**
   *
   * @returns {Object} description
   */
  render() {
    return _etch2.default.dom(
      'div',
      { className: 'block-container' },
      _etch2.default.dom(
        'h2',
        null,
        'Icons'
      ),
      _etch2.default.dom('input', {
        className: 'input-search',
        type: 'search',
        on: this.events,
        placeholder: 'type to search for an icon'
      }),
      _etch2.default.dom(
        'ul',
        { className: 'info-messages block' },
        _etch2.default.dom(
          'li',
          null,
          'Showing\xA0',
          _etch2.default.dom(
            'span',
            { className: 'highlight' },
            this.icons.length
          ),
          '\xA0icon(s).'
        )
      ),
      _etch2.default.dom(
        'div',
        { className: 'block-icons' },
        this.icons
      )
    );
  }
};
exports.default = IconsContainer;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb250YWluZXJzL2ljb25zLmpzIl0sIm5hbWVzIjpbIkljb25zQ29udGFpbmVyIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImZpbHRlckljb25zIiwiZGlzcG9zYWJsZXMiLCJDb21wb3NpdGVEaXNwb3NhYmxlIiwiZW1pdHRlciIsIkVtaXR0ZXIiLCJldGNoIiwiaW5pdGlhbGl6ZSIsImRlc3Ryb3kiLCJ1cGRhdGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImV2ZW50cyIsInNlYXJjaCIsImtleXVwIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbHRlciIsImljb25zIiwiZm9yRWFjaCIsImZpbmRpbmciLCJpY29uIiwicmVwbGFjZSIsImxlbmd0aCIsImluY2x1ZGVzIiwicHVzaCIsIm9uSWNvbkNsaWNrIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OzsyY0FMQTs7QUFPQTs7O0lBR01BLGMsR0FBTixNQUFNQSxjQUFOLENBQXFCO0FBQ25COzs7O0FBSUFDLGNBQWFDLEtBQWIsRUFBb0I7QUFDbEIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsV0FBTDtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsSUFBSUMseUJBQUosRUFBbkI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsSUFBSUMsYUFBSixFQUFmOztBQUVBQyxtQkFBS0MsVUFBTCxDQUFnQixJQUFoQjtBQUNEOztBQUVEOzs7QUFHTUMsU0FBTixHQUFpQjtBQUFBOztBQUFBO0FBQ2YsWUFBTUYsZUFBS0UsT0FBTCxDQUFhLEtBQWIsQ0FBTjtBQURlO0FBRWhCOztBQUVEOzs7OztBQUtNQyxRQUFOLENBQWNULEtBQWQsRUFBcUI7QUFBQTs7QUFBQTtBQUNuQixVQUFJQSxLQUFKLEVBQVc7QUFDVCxlQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxlQUFPTSxlQUFLRyxNQUFMLENBQVksTUFBWixDQUFQO0FBQ0Q7O0FBRUQsYUFBT0MsUUFBUUMsT0FBUixFQUFQO0FBTm1CO0FBT3BCOztBQUVEOzs7O0FBSUEsTUFBSUMsTUFBSixHQUFjO0FBQ1osV0FBTztBQUNMQyxjQUFRLE1BQU0sS0FBS1osV0FBTCxFQURUO0FBRUxhLGFBQU9DLFNBQVMsS0FBS2QsV0FBTCxDQUFpQmMsTUFBTUMsTUFBTixDQUFhQyxLQUE5QjtBQUZYLEtBQVA7QUFJRDs7QUFFRDs7OztBQUlNaEIsYUFBTixDQUFtQmlCLE1BQW5CLEVBQTJCO0FBQUE7O0FBQUE7QUFDekIsYUFBS0MsS0FBTCxHQUFhLEVBQWI7O0FBRUFBLHNCQUFNQyxPQUFOLENBQWMsZ0JBQVE7QUFDcEIsY0FBTUMsVUFBVUMsS0FBS0MsT0FBTCxDQUFhLE9BQWIsRUFBc0IsRUFBdEIsQ0FBaEI7O0FBRUEsWUFBSSxDQUFDTCxNQUFELElBQVcsQ0FBQ0EsT0FBT00sTUFBbkIsSUFBNkJILFFBQVFJLFFBQVIsQ0FBaUJQLE1BQWpCLENBQWpDLEVBQTJEO0FBQ3pELGlCQUFLQyxLQUFMLENBQVdPLElBQVgsQ0FDRSxtQkFBQyxjQUFELElBQU0sTUFBTUosSUFBWixFQUFrQixhQUFhLE9BQUt0QixLQUFMLENBQVcyQixXQUExQyxHQURGO0FBR0Q7QUFDRixPQVJEOztBQVVBckIscUJBQUtHLE1BQUwsQ0FBWSxNQUFaO0FBYnlCO0FBYzFCOztBQUVEOzs7O0FBSUFtQixXQUFVO0FBQ1IsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLGlCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFDRSxtQkFBVSxjQURaO0FBRUUsY0FBSyxRQUZQO0FBR0UsWUFBSSxLQUFLaEIsTUFIWDtBQUlFLHFCQUFZO0FBSmQsUUFGRjtBQVFFO0FBQUE7QUFBQSxVQUFJLFdBQVUscUJBQWQ7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUVFO0FBQUE7QUFBQSxjQUFNLFdBQVUsV0FBaEI7QUFBNkIsaUJBQUtPLEtBQUwsQ0FBV0s7QUFBeEMsV0FGRjtBQUFBO0FBQUE7QUFERixPQVJGO0FBY0U7QUFBQTtBQUFBLFVBQUssV0FBVSxhQUFmO0FBQThCLGFBQUtMO0FBQW5DO0FBZEYsS0FERjtBQWtCRDtBQXpGa0IsQztrQkE0Rk5yQixjIiwiZmlsZSI6Imljb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3ggZXRjaC5kb20gKi9cblxuaW1wb3J0IHsgRW1pdHRlciwgQ29tcG9zaXRlRGlzcG9zYWJsZSB9IGZyb20gJ2F0b20nO1xuaW1wb3J0IGV0Y2ggZnJvbSAnZXRjaCc7XG5pbXBvcnQgaWNvbnMgZnJvbSAnLi8uLi9jb25zdGFudHMvaWNvbnMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi8uLi9jb21wb25lbnRzL2ljb24nO1xuXG4vKipcbiAqXG4gKi9cbmNsYXNzIEljb25zQ29udGFpbmVyIHtcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyAtIGRlc2NyaXB0aW9uXG4gICAqL1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgdGhpcy5maWx0ZXJJY29ucygpO1xuICAgIHRoaXMuZGlzcG9zYWJsZXMgPSBuZXcgQ29tcG9zaXRlRGlzcG9zYWJsZSgpO1xuICAgIHRoaXMuZW1pdHRlciA9IG5ldyBFbWl0dGVyKCk7XG5cbiAgICBldGNoLmluaXRpYWxpemUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIGFzeW5jIGRlc3Ryb3kgKCkge1xuICAgIGF3YWl0IGV0Y2guZGVzdHJveSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBkZXNjcmlwdGlvblxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBkZXNjcmlwdGlvblxuICAgKi9cbiAgYXN5bmMgdXBkYXRlIChwcm9wcykge1xuICAgIGlmIChwcm9wcykge1xuICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgcmV0dXJuIGV0Y2gudXBkYXRlKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBkZXNjcmlwdGlvblxuICAgKi9cbiAgZ2V0IGV2ZW50cyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlYXJjaDogKCkgPT4gdGhpcy5maWx0ZXJJY29ucygpLFxuICAgICAga2V5dXA6IGV2ZW50ID0+IHRoaXMuZmlsdGVySWNvbnMoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbHRlciAtIGRlc2NyaXB0aW9uXG4gICAqL1xuICBhc3luYyBmaWx0ZXJJY29ucyAoZmlsdGVyKSB7XG4gICAgdGhpcy5pY29ucyA9IFtdO1xuXG4gICAgaWNvbnMuZm9yRWFjaChpY29uID0+IHtcbiAgICAgIGNvbnN0IGZpbmRpbmcgPSBpY29uLnJlcGxhY2UoJy1pY29uJywgJycpO1xuXG4gICAgICBpZiAoIWZpbHRlciB8fCAhZmlsdGVyLmxlbmd0aCB8fCBmaW5kaW5nLmluY2x1ZGVzKGZpbHRlcikpIHtcbiAgICAgICAgdGhpcy5pY29ucy5wdXNoKFxuICAgICAgICAgIDxJY29uIGljb249e2ljb259IG9uSWNvbkNsaWNrPXt0aGlzLnByb3BzLm9uSWNvbkNsaWNrfSAvPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZXRjaC51cGRhdGUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gZGVzY3JpcHRpb25cbiAgICovXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stY29udGFpbmVyXCI+XG4gICAgICAgIDxoMj5JY29uczwvaDI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LXNlYXJjaFwiXG4gICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgb249e3RoaXMuZXZlbnRzfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwidHlwZSB0byBzZWFyY2ggZm9yIGFuIGljb25cIlxuICAgICAgICAvPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5mby1tZXNzYWdlcyBibG9ja1wiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIFNob3dpbmcmbmJzcDtcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiPnt0aGlzLmljb25zLmxlbmd0aH08L3NwYW4+Jm5ic3A7aWNvbihzKS5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWljb25zXCI+e3RoaXMuaWNvbnN9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEljb25zQ29udGFpbmVyO1xuIl19