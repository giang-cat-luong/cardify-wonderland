
import { useState } from "react";
import { useRouter } from "next/router";
import { ArrowLeft, Info, Plus, Upload, X, Youtube } from "lucide-react";
import Link from "next/link";

const CreateService = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  
  // Service Details (Step 1)
  const [serviceDetails, setServiceDetails] = useState({
    category: "",
    type: "",
    name: "",
    description: ""
  });

  // Packages (Step 2)
  const [packages, setPackages] = useState([
    {
      id: 1,
      name: "Gói 1",
      description: "",
      deliverables: "",
      price: "",
      deliveryDays: ""
    }
  ]);

  // Images (Step 3)
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [serviceImages, setServiceImages] = useState<string[]>([]);
  const [youtubeUrl, setYoutubeUrl] = useState("");

  // Work Steps (Step 4)
  const [workSteps, setWorkSteps] = useState([
    { id: 1, description: "" },
    { id: 2, description: "" }
  ]);

  // Confirmation (Step 5)
  const [confirmations, setConfirmations] = useState({
    isOwner: false,
    canComplete: false,
    agreeTerms: false
  });

  // Check if the current step is complete
  const isStepComplete = (step: number): boolean => {
    switch (step) {
      case 1:
        return serviceDetails.category !== "" && 
               serviceDetails.type !== "" && 
               serviceDetails.name !== "" && 
               serviceDetails.description !== "";
      case 2:
        return packages.every(pkg => 
          pkg.name !== "" && 
          pkg.deliverables !== "" && 
          pkg.price !== "" && 
          pkg.deliveryDays !== ""
        );
      case 3:
        return coverImage !== null && serviceImages.length >= 2;
      case 4:
        return workSteps.every(step => step.description !== "");
      case 5:
        return Object.values(confirmations).every(value => value === true);
      default:
        return false;
    }
  };

  // Handle Steps Navigation
  const nextStep = () => {
    if (currentStep < 5) {
      // Add current step to completed steps if not already there
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps([...completedSteps, currentStep]);
      }
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  // Go directly to a specific step if it's already completed or is the next step
  const goToStep = (step: number) => {
    // Can always go to step 1
    if (step === 1) {
      setCurrentStep(step);
      window.scrollTo(0, 0);
      return;
    }
    
    // For other steps, can only go to a step if:
    // 1. It's the current step
    // 2. It's a previous step that's been completed
    // 3. It's the next step after all completed steps
    if (
      step === currentStep ||
      completedSteps.includes(step - 1) ||
      (step === completedSteps.length + 1)
    ) {
      setCurrentStep(step);
      window.scrollTo(0, 0);
    }
  };

  // Handle Package Functions
  const addPackage = () => {
    const newId = packages.length > 0 ? Math.max(...packages.map(p => p.id)) + 1 : 1;
    setPackages([
      ...packages,
      {
        id: newId,
        name: `Gói ${newId}`,
        description: "",
        deliverables: "",
        price: "",
        deliveryDays: ""
      }
    ]);
  };

  const removePackage = (id: number) => {
    if (packages.length > 1) {
      setPackages(packages.filter(pkg => pkg.id !== id));
    }
  };

  // Handle Image Functions
  const handleCoverImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setCoverImage(imageUrl);
    }
  };

  const handleServiceImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map(file => URL.createObjectURL(file));
      setServiceImages([...serviceImages, ...newImages]);
    }
  };

  const removeServiceImage = (index: number) => {
    const updatedImages = [...serviceImages];
    updatedImages.splice(index, 1);
    setServiceImages(updatedImages);
  };

  // Handle Work Steps Functions
  const addWorkStep = () => {
    const newId = workSteps.length > 0 ? Math.max(...workSteps.map(step => step.id)) + 1 : 1;
    setWorkSteps([...workSteps, { id: newId, description: "" }]);
  };

  const removeWorkStep = (id: number) => {
    if (workSteps.length > 2) {
      setWorkSteps(workSteps.filter(step => step.id !== id));
    }
  };

  const updateWorkStep = (id: number, description: string) => {
    setWorkSteps(
      workSteps.map(step => 
        step.id === id ? { ...step, description } : step
      )
    );
  };

  // Handle form submission
  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log({
      serviceDetails,
      packages,
      coverImage,
      serviceImages,
      youtubeUrl,
      workSteps
    });
    
    // Navigate back to services list
    router.push("/my-services");
  };

  const handleServiceDetailChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setServiceDetails({
      ...serviceDetails,
      [name]: value
    });
  };

  const handlePackageChange = (id: number, field: string, value: string) => {
    setPackages(
      packages.map(pkg => 
        pkg.id === id ? { ...pkg, [field]: value } : pkg
      )
    );
  };

  const handleConfirmationChange = (key: string, checked: boolean) => {
    setConfirmations({
      ...confirmations,
      [key]: checked
    });
  };

  const isAllConfirmed = Object.values(confirmations).every(value => value === true);

  // Render Step Content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-medium mb-6">Thông tin dịch vụ</h2>
            
            <div className="space-y-6 max-w-4xl">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Danh mục dịch vụ
                  </label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    name="category"
                    value={serviceDetails.category}
                    onChange={handleServiceDetailChange}
                  >
                    <option value="">Chọn danh mục</option>
                    <option value="design">Thiết kế & Creative</option>
                    <option value="marketing">Marketing</option>
                    <option value="writing">Viết & Translation</option>
                    <option value="video">Video & Animation</option>
                    <option value="tech">Lập trình & Công nghệ</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dịch vụ
                  </label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    name="type"
                    value={serviceDetails.type}
                    onChange={handleServiceDetailChange}
                  >
                    <option value="">Chọn loại dịch vụ</option>
                    <option value="webdesign">Thiết kế web</option>
                    <option value="logo">Thiết kế logo</option>
                    <option value="social">Thiết kế mạng xã hội</option>
                    <option value="banners">Thiết kế banner, poster</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tiêu đề dịch vụ
                </label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ví dụ: Thiết kế website chuyên nghiệp, tối ưu SEO"
                  name="name"
                  value={serviceDetails.name}
                  onChange={handleServiceDetailChange}
                />
                
                <div className="mt-2 p-3 bg-blue-50 rounded-lg flex">
                  <Info className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <p className="font-medium mb-1">Tiêu đề dịch vụ tốt nên:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Mô tả rõ dịch vụ bạn đang cung cấp</li>
                      <li>Bao gồm từ khóa chính mà người mua có thể tìm kiếm</li>
                      <li>Nổi bật những lợi ích của dịch vụ</li>
                      <li>Có độ dài từ 5-10 từ</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mô tả dịch vụ
                </label>
                <textarea 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 min-h-40"
                  placeholder="Mô tả chi tiết dịch vụ của bạn..."
                  name="description"
                  value={serviceDetails.description}
                  onChange={handleServiceDetailChange}
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <button 
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                  onClick={nextStep}
                >
                  Lưu và tiếp tục
                </button>
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-medium mb-6">Các gói dịch vụ và giá</h2>
            
            <div className="space-y-8 max-w-4xl">
              {packages.map((pkg, index) => (
                <div key={pkg.id} className="border border-gray-200 rounded-lg p-6 relative">
                  <div className="absolute -top-3 left-4 bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                    {pkg.name}
                  </div>
                  
                  {packages.length > 1 && (
                    <button
                      onClick={() => removePackage(pkg.id)}
                      className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                  
                  <div className="mt-4 space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tên gói
                      </label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        placeholder="Ví dụ: Gói cơ bản, Gói nâng cao, etc."
                        value={pkg.name}
                        onChange={(e) => handlePackageChange(pkg.id, 'name', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Deliverables
                      </label>
                      <textarea 
                        className="w-full p-3 border border-gray-300 rounded-lg min-h-24"
                        placeholder="Mô tả những gì khách hàng sẽ nhận được..."
                        value={pkg.deliverables}
                        onChange={(e) => handlePackageChange(pkg.id, 'deliverables', e.target.value)}
                      ></textarea>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Giá (VND)
                        </label>
                        <input 
                          type="number" 
                          className="w-full p-3 border border-gray-300 rounded-lg"
                          placeholder="500,000"
                          value={pkg.price}
                          onChange={(e) => handlePackageChange(pkg.id, 'price', e.target.value)}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Thời gian giao hàng (ngày)
                        </label>
                        <input 
                          type="number" 
                          className="w-full p-3 border border-gray-300 rounded-lg"
                          placeholder="3"
                          value={pkg.deliveryDays}
                          onChange={(e) => handlePackageChange(pkg.id, 'deliveryDays', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <button 
                onClick={addPackage}
                className="flex items-center gap-2 text-blue-600 font-medium"
              >
                <Plus className="w-4 h-4" />
                Thêm gói
              </button>
              
              <div className="flex justify-between">
                <button 
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50"
                  onClick={prevStep}
                >
                  Quay lại
                </button>
                <button 
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                  onClick={nextStep}
                >
                  Tiếp tục
                </button>
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-medium mb-6">Ảnh và video dịch vụ</h2>
            
            <div className="space-y-8 max-w-4xl">
              {/* Cover Image Upload */}
              <div>
                <h3 className="text-md font-medium mb-2">Ảnh bìa</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Ảnh bìa sẽ được hiển thị nổi bật trong kết quả tìm kiếm (bắt buộc)
                </p>
                
                {!coverImage ? (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <input 
                      type="file" 
                      id="cover-image" 
                      className="hidden" 
                      accept="image/*"
                      onChange={handleCoverImageUpload}
                    />
                    <label 
                      htmlFor="cover-image"
                      className="cursor-pointer flex flex-col items-center justify-center"
                    >
                      <Upload className="w-10 h-10 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600">Kéo thả hoặc nhấn để tải lên</p>
                      <p className="text-xs text-gray-500 mt-1">JPG, PNG hoặc GIF (max. 5MB)</p>
                    </label>
                  </div>
                ) : (
                  <div className="relative">
                    <img 
                      src={coverImage} 
                      alt="Cover" 
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <button 
                      className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md"
                      onClick={() => setCoverImage(null)}
                    >
                      <X className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                )}
              </div>
              
              {/* Service Images Upload */}
              <div>
                <h3 className="text-md font-medium mb-2">Ảnh dịch vụ</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Tải lên ít nhất 2 ảnh liên quan đến dịch vụ của bạn (tối đa 30 ảnh)
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {serviceImages.map((image, index) => (
                    <div key={index} className="relative">
                      <img 
                        src={image} 
                        alt={`Service ${index}`} 
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <button 
                        className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md"
                        onClick={() => removeServiceImage(index)}
                      >
                        <X className="w-4 h-4 text-gray-700" />
                      </button>
                    </div>
                  ))}
                  
                  {serviceImages.length < 30 && (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                      <input 
                        type="file" 
                        id="service-images" 
                        className="hidden" 
                        accept="image/*"
                        multiple
                        onChange={handleServiceImageUpload}
                      />
                      <label 
                        htmlFor="service-images"
                        className="cursor-pointer flex flex-col items-center justify-center p-4"
                      >
                        <Plus className="w-6 h-6 text-gray-400 mb-1" />
                        <p className="text-xs text-gray-500">Thêm ảnh</p>
                      </label>
                    </div>
                  )}
                </div>
                
                <div className="p-4 bg-amber-50 border border-amber-100 rounded-lg mb-6 flex">
                  <Info className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" />
                  <p className="text-sm text-gray-700">
                    Chúng tôi khuyến khích bạn tải lên ảnh có độ phân giải cao (ít nhất 1200x800 pixel) 
                    và tỷ lệ 3:2 để có trải nghiệm tốt nhất.
                  </p>
                </div>
              </div>
              
              {/* YouTube Video */}
              <div>
                <h3 className="text-md font-medium mb-2">Video từ YouTube</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Thêm một video demo từ YouTube (không bắt buộc)
                </p>
                
                <div className="flex items-center border border-gray-300 rounded-lg pl-3 overflow-hidden">
                  <Youtube className="w-5 h-5 text-gray-400 mr-2" />
                  <input 
                    type="text" 
                    className="flex-1 p-3 border-none focus:ring-0"
                    placeholder="https://www.youtube.com/watch?v=..."
                    value={youtubeUrl}
                    onChange={(e) => setYoutubeUrl(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex justify-between">
                <button 
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50"
                  onClick={prevStep}
                >
                  Quay lại
                </button>
                <button 
                  className={`px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 ${(!coverImage || serviceImages.length < 2) ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={nextStep}
                  disabled={!coverImage || serviceImages.length < 2}
                >
                  Tiếp tục
                </button>
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-medium mb-6">Các bước thực hiện công việc</h2>
            
            <div className="space-y-8 max-w-4xl">
              <p className="text-sm text-gray-600">
                Mô tả các bước thực hiện để hoàn thành dịch vụ của bạn. 
                Điều này giúp khách hàng hiểu rõ quy trình làm việc.
              </p>
              
              {workSteps.map((step, index) => (
                <div key={step.id} className="border border-gray-200 rounded-lg p-6 relative">
                  <div className="absolute -top-3 left-4 bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                    Bước {index + 1}
                  </div>
                  
                  {workSteps.length > 2 && (
                    <button
                      onClick={() => removeWorkStep(step.id)}
                      className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                  
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mô tả
                    </label>
                    <textarea 
                      className="w-full p-3 border border-gray-300 rounded-lg min-h-24"
                      placeholder="Mô tả chi tiết bước thực hiện..."
                      value={step.description}
                      onChange={(e) => updateWorkStep(step.id, e.target.value)}
                    ></textarea>
                  </div>
                </div>
              ))}
              
              <button 
                onClick={addWorkStep}
                className="flex items-center gap-2 text-blue-600 font-medium"
              >
                <Plus className="w-4 h-4" />
                Thêm bước
              </button>
              
              <div className="flex justify-between">
                <button 
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50"
                  onClick={prevStep}
                >
                  Quay lại
                </button>
                <button 
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                  onClick={nextStep}
                >
                  Tiếp tục
                </button>
              </div>
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-medium mb-6">Xác nhận dịch vụ</h2>
            
            <div className="space-y-8 max-w-4xl">
              <div className="p-4 bg-amber-50 border border-amber-100 rounded-lg mb-6">
                <p className="text-sm text-gray-700 mb-2 font-medium">
                  Hồ sơ dịch vụ của bạn sẽ được xem xét trước khi được đăng
                </p>
                <p className="text-sm text-gray-600">
                  Đội ngũ của chúng tôi sẽ xem xét dịch vụ của bạn trong vòng 24 giờ để đảm bảo 
                  nó tuân thủ theo các tiêu chuẩn chất lượng của Fastlance.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="isOwner" 
                    className="mt-1 mr-3" 
                    checked={confirmations.isOwner}
                    onChange={(e) => handleConfirmationChange('isOwner', e.target.checked)}
                  />
                  <label htmlFor="isOwner" className="text-sm text-gray-700">
                    Tôi xác nhận rằng tôi là người thực sự cung cấp dịch vụ này và không phải 
                    đang đăng hộ cho người khác.
                  </label>
                </div>
                
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="canComplete" 
                    className="mt-1 mr-3" 
                    checked={confirmations.canComplete}
                    onChange={(e) => handleConfirmationChange('canComplete', e.target.checked)}
                  />
                  <label htmlFor="canComplete" className="text-sm text-gray-700">
                    Tôi xác nhận rằng tôi có khả năng hoàn thành tất cả các công việc như đã mô tả 
                    trong dịch vụ và đảm bảo chất lượng.
                  </label>
                </div>
                
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="agreeTerms" 
                    className="mt-1 mr-3" 
                    checked={confirmations.agreeTerms}
                    onChange={(e) => handleConfirmationChange('agreeTerms', e.target.checked)}
                  />
                  <label htmlFor="agreeTerms" className="text-sm text-gray-700">
                    Tôi đồng ý với các Điều khoản Dịch vụ và Chính sách Người dùng của Fastlance.
                  </label>
                </div>
              </div>
              
              <div className="flex justify-between">
                <button 
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50"
                  onClick={prevStep}
                >
                  Quay lại
                </button>
                <button 
                  className={`px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 ${!isAllConfirmed ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={handleSubmit}
                  disabled={!isAllConfirmed}
                >
                  Đăng dịch vụ
                </button>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex items-center">
          <button 
            className="mr-4 text-gray-500"
            onClick={() => router.push("/my-services")}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-medium">Thêm dịch vụ mới</h1>
        </div>
      </header>
      
      {/* Steps Progress */}
      <div className="container mx-auto px-6 py-6">
        <div className="max-w-4xl mx-auto flex justify-between mb-8 relative">
          {/* Progress Bar */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          <div 
            className="absolute top-1/2 left-0 h-1 bg-blue-600 -translate-y-1/2 z-0"
            style={{ width: `${(currentStep - 1) * 25}%` }}
          ></div>
          
          {/* Step Circles */}
          {[1, 2, 3, 4, 5].map((step) => (
            <div 
              key={step} 
              className="z-10 flex flex-col items-center cursor-pointer"
              onClick={() => goToStep(step)}
            >
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center 
                  ${step <= currentStep 
                    ? 'bg-blue-600 text-white' 
                    : completedSteps.includes(step - 1) || (step === completedSteps.length + 1)
                      ? 'bg-white border-2 border-gray-300 text-gray-600 hover:border-blue-400'
                      : 'bg-white border-2 border-gray-300 text-gray-400 opacity-60'
                  }`}
              >
                {step}
              </div>
              <span className={`text-xs mt-2 ${
                step <= currentStep || completedSteps.includes(step) 
                  ? 'text-gray-700' 
                  : 'text-gray-500'
              }`}>
                {step === 1 && 'Thông tin'}
                {step === 2 && 'Gói dịch vụ'}
                {step === 3 && 'Ảnh/video'}
                {step === 4 && 'Các bước'}
                {step === 5 && 'Xác nhận'}
              </span>
            </div>
          ))}
        </div>
        
        {/* Step Content */}
        <div className="max-w-4xl mx-auto">
          {renderStepContent()}
        </div>
      </div>
    </div>
  );
};

export default CreateService;
