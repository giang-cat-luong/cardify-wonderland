
const BankInfoSection = ({
  handleSave
}: {
  handleSave: () => void;
}) => {
  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden">
      <div className="border-b border-gray-200 p-5">
        <h2 className="text-lg font-medium text-gray-800">Thông tin ngân hàng</h2>
        <p className="text-sm text-gray-500">Để nhận thanh toán qua chuyển khoản</p>
      </div>

      <div className="p-6">
        <p className="text-sm text-gray-700 mb-6">
          Thông tin cung cấp dưới đây sẽ được sử dụng để thanh toán. Vui lòng kiểm tra kỹ trước khi lưu.
        </p>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Tên ngân hàng</label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Chọn ngân hàng</option>
            <option value="vietcombank">Vietcombank</option>
            <option value="tpbank">TPBank</option>
            <option value="techcombank">Techcombank</option>
            <option value="mbbank">MB Bank</option>
            <option value="acb">ACB</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Số tài khoản</label>
          <input
            type="text"
            placeholder="Nhập số tài khoản"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Tên chủ tài khoản</label>
          <input
            type="text"
            placeholder="Nhập tên chủ tài khoản"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Chi nhánh</label>
          <input
            type="text"
            placeholder="Nhập chi nhánh ngân hàng"
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

export default BankInfoSection;
