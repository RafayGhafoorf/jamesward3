import Preview from 'heyui/src/components//imagepreview/imagepreview-modal';

export default function (datas, index) {
  return this.$Modal({
    className: 'h-image-preview-modal',
    component: {
      vue: Preview,
      datas: {
        isShow: true,
        datas,
        index
      }
    }
  });
}
