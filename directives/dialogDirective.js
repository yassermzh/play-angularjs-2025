const Dialog = {
  bindings: {
    isOpen: "<",
    onConfirm: "&",
    onCancel: "&",
  },
  controller: function () {},
  template: `
    <div ng-show="$ctrl.isOpen">
      <p>Are you sure?</p>
      <button ng-click="$ctrl.onConfirm()">Yes</button>
      <button ng-click="$ctrl.onCancel()">No</button>
    </div>
  `,
};

export default Dialog;
