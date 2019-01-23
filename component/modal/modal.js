"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var menu_service_1 = require("../../service/menu/menu.service");
var Event_1 = require("../../util/Event/Event");
Component({
    properties: {},
    data: {
        show: false
    },
    methods: {},
    created: function () {
        var _this = this;
        menu_service_1.menu();
        Event_1.$Event.$on("load", function (data) {
            setTimeout(function () {
                _this.setData({
                    show: data
                });
            }, 1000);
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGdFQUF3RDtBQUN4RCxnREFBaUQ7QUFFakQsU0FBUyxDQUFDO0lBSU4sVUFBVSxFQUFFLEVBRVg7SUFLRCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUksS0FBSztLQUNoQjtJQUlELE9BQU8sRUFBRSxFQUVSO0lBQ0QsT0FBTztRQUFQLGlCQVNDO1FBUkcsbUJBQUksRUFBRSxDQUFFO1FBQ1IsY0FBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUcsVUFBRSxJQUFVO1lBQzVCLFVBQVUsQ0FBRTtnQkFDUixLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNULElBQUksRUFBRyxJQUFJO2lCQUNkLENBQUMsQ0FBQztZQUNQLENBQUMsRUFBRyxJQUFJLENBQUMsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudC9tb2RhbC9tb2RhbC5qc1xuaW1wb3J0IHsgbWVudSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvbWVudS9tZW51LnNlcnZpY2UnIDtcbmltcG9ydCB7ICRFdmVudCB9IGZyb20gJy4uLy4uL3V0aWwvRXZlbnQvRXZlbnQnIDtcbi8vQHRzLWlnbm9yZVxuQ29tcG9uZW50KHtcbiAgICAvKipcbiAgICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICAgKi9cbiAgICBwcm9wZXJ0aWVzOiB7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAgICovXG4gICAgZGF0YToge1xuICAgICAgICBzaG93IDogIGZhbHNlXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICAgKi9cbiAgICBtZXRob2RzOiB7XG5cbiAgICB9LFxuICAgIGNyZWF0ZWQoKXtcbiAgICAgICAgbWVudSgpIDtcbiAgICAgICAgJEV2ZW50LiRvbihcImxvYWRcIiAsICggZGF0YSA6IGFueSApID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICBzaG93IDogZGF0YVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSAsIDEwMDApO1xuICAgICAgICB9KTtcbiAgICB9XG59KSJdfQ==