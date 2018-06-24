import scrollHandler from './scroll-handler';
import buttonAnimations from './button-animations';
import safariRequiredShim from './safari-required-shim';

safariRequiredShim();
scrollHandler('[js-click=header-nav-item]');
buttonAnimations();
