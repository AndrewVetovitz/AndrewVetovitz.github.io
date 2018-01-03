import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPageScrollServiceProvider } from './ngx-page-scroll.service';
import { PageScroll } from './ngx-page-scroll.directive';
var NgxPageScrollModule = (function () {
    function NgxPageScrollModule() {
    }
    NgxPageScrollModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [PageScroll],
                    exports: [PageScroll],
                    providers: [NgxPageScrollServiceProvider]
                },] },
    ];
    /** @nocollapse */
    NgxPageScrollModule.ctorParameters = function () { return []; };
    return NgxPageScrollModule;
}());
export { NgxPageScrollModule };
