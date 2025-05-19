const MyDialog = {
  bindings: {
    isOpen: "<",
  },
  transclude: true,
  template: `<dialog ng-open="$ctrl.isOpen" ng-transclude></dialog>`,
};

export default MyDialog;
