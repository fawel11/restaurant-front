import Swal from "sweetalert2";

const SweetAlertPlugin = {
  install(app) {
    app.config.globalProperties.$toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 5000,
    });
  },
};

export default SweetAlertPlugin;
