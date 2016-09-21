import scrollHandler from './scroll-handler';
import safariRequiredShim from './safari-required-shim';

safariRequiredShim();
scrollHandler('[js-click=header-nav-item]');
