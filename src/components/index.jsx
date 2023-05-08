import { lazy } from "react";

const AdminLayout = lazy(() => import("./layout/AdminLayout"));
const Sidebar = lazy(() => import("./admin/sidebar/Sidebar"));
const LoginRegister = lazy(() => import("./admin/login_register/LoginRegister"));
const ProtectedRoute = lazy(() => import("./admin/protected_route/ProtectedRoute"));
const Loader = lazy(() => import("./loader/Loader"));
const SkeletonPost = lazy(() => import("./skeleton_loader/SkeletonPost"));
const ErrorFallback = lazy(() => import("./error_fallback/ErrorFallback"))
const TextEditor = lazy(() => import("./admin/text_editor/TextEditor"))
const Form = lazy(() => import("./admin/form/Form"))
const FormHeader = lazy(() => import("./admin/form_header/FormHeader"))
const Table = lazy(() => import("./admin/table/Table"))
const EditForm = lazy(() => import("./admin/edit_form/EditForm"))

export {
  Sidebar,
  AdminLayout,
  LoginRegister,
  ProtectedRoute,
  Loader,
  SkeletonPost,
  ErrorFallback,
  TextEditor,
  Form,
  FormHeader, 
  Table,
  EditForm
};
