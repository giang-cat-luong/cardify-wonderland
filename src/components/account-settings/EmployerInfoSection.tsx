
const EmployerInfoSection = ({
  handleSave
}: {
  handleSave: () => void;
}) => {
  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden">
      <div className="border-b border-gray-200 p-5">
        <h2 className="text-lg font-medium text-gray-800">Thông tin tài liệu của người thuê (cá nhân)</h2>
        <p className="text-sm text-gray-500">Cung cấp thông tin khi bạn hoạt động với vai trò người thuê</p>
      </div>

      <div className="p-6">
        <p className="text-sm text-gray-700 mb-6">
          Thông tin này được sử dụng khi bạn sử dụng Fastlance với vai trò là người thuê. Vui lòng cung cấp thông tin chính xác.
        </p>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Tên doanh nghiệp/Tổ chức</label>
          <input
            type="text"
            placeholder="Nhập tên doanh nghiệp hoặc tổ chức"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Chức vụ của bạn</label>
          <input
            type="text"
            placeholder="Nhập chức vụ của bạn trong tổ chức"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Mã số thuế doanh nghiệp</label>
          <input
            type="text"
            placeholder="Nhập mã số thuế doanh nghiệp"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployerInfoSection;
