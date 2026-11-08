import { useMemo, useState } from 'react';
import {
  Search,
  Download,
  Eye,
  FileText,
  Package,
  Layers,
  Sparkles,
  ExternalLink,
  X,
  CheckCircle2
} from 'lucide-react';
import { PageHeader, Button, cardClass, inputClass } from '../components/ui';
import { useAdminLanguage } from '../adminI18n';
import {
  PRODUCTS_LIST,
  CATALOGUES_LIST,
  CATEGORIES_DATA,
  type ProductItem,
  type CatalogueInfo
} from '../../data/products';

export function ProductsPage() {
  const { language } = useAdminLanguage();
  const [activeTab, setActiveTab] = useState<'products' | 'catalogues'>('products');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [inspectProduct, setInspectProduct] = useState<ProductItem | null>(null);

  const categories = useMemo(() => {
    return Object.entries(CATEGORIES_DATA).map(([id, info]) => ({
      id,
      nameEn: info.titleEn,
      nameVi: info.titleVi,
    }));
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS_LIST.filter((p) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        p.category === selectedCategory ||
        (selectedCategory === 'crops-plant-based' &&
          ['fresh', 'powders', 'freeze-dried', 'iqf'].includes(p.category));

      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const nameEn = (p.nameEn || '').toLowerCase();
      const nameVi = (p.nameVi || '').toLowerCase();
      const scientificName = (p.scientificName || '').toLowerCase();
      const subCategory = (p.subCategory || '').toLowerCase();
      const packaging = (p.specifications.packaging || '').toLowerCase();

      return (
        matchesCategory &&
        (nameEn.includes(query) ||
          nameVi.includes(query) ||
          scientificName.includes(query) ||
          subCategory.includes(query) ||
          packaging.includes(query))
      );
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Inventory & Sourcing"
        title={language === 'vi' ? 'Quản Lý Sản Phẩm & Catalogue' : 'Products & Catalogues'}
        description={
          language === 'vi'
            ? 'Theo dõi 178 mã nông sản xuất khẩu, vật tư và 13 ấn phẩm catalogue kỹ thuật số của VAC.'
            : 'Track 178 export-grade agricultural products, inputs, and 13 digital technical catalogues.'
        }
        action={
          <div className="flex gap-2">
            <Button
              variant={activeTab === 'products' ? 'primary' : 'secondary'}
              onClick={() => setActiveTab('products')}
            >
              <Package size={16} />
              {language === 'vi' ? 'Sản Phẩm (178)' : 'Products (178)'}
            </Button>
            <Button
              variant={activeTab === 'catalogues' ? 'primary' : 'secondary'}
              onClick={() => setActiveTab('catalogues')}
            >
              <FileText size={16} />
              {language === 'vi' ? 'Catalogue (13)' : 'Catalogues (13)'}
            </Button>
          </div>
        }
      />

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className={`${cardClass} p-4`}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#6B7280]">
              {language === 'vi' ? 'Tổng Số Sản Phẩm' : 'Total Products'}
            </span>
            <Package size={18} className="text-[#104D2E]" />
          </div>
          <p className="mt-2 text-2xl font-bold text-[#0B120C]">{PRODUCTS_LIST.length}</p>
          <span className="text-xs text-[#104D2E] font-medium">100% Export-grade specs</span>
        </div>

        <div className={`${cardClass} p-4`}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#6B7280]">
              {language === 'vi' ? 'Ngành Hàng / Danh Mục' : 'Product Categories'}
            </span>
            <Layers size={18} className="text-[#D8AA6D]" />
          </div>
          <p className="mt-2 text-2xl font-bold text-[#0B120C]">{Object.keys(CATEGORIES_DATA).length}</p>
          <span className="text-xs text-[#6B7280]">Plant-based, Poultry, Seafood</span>
        </div>

        <div className={`${cardClass} p-4`}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#6B7280]">
              {language === 'vi' ? 'Catalogue Kỹ Thuật' : 'Active Catalogues'}
            </span>
            <FileText size={18} className="text-[#104D2E]" />
          </div>
          <p className="mt-2 text-2xl font-bold text-[#0B120C]">{CATALOGUES_LIST.length}</p>
          <span className="text-xs text-green-700 font-medium">All compressed & verified</span>
        </div>

        <div className={`${cardClass} p-4`}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#6B7280]">
              {language === 'vi' ? 'Đang Lọc' : 'Current Filter'}
            </span>
            <Sparkles size={18} className="text-[#D8AA6D]" />
          </div>
          <p className="mt-2 text-2xl font-bold text-[#0B120C]">{filteredProducts.length}</p>
          <span className="text-xs text-[#6B7280]">Matching current search</span>
        </div>
      </div>

      {activeTab === 'products' ? (
        <div className={`${cardClass} p-5 space-y-4`}>
          {/* Controls: Search + Category Filter */}
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" size={16} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === 'vi'
                    ? 'Tìm tên sản phẩm, tên khoa học, quy cách...'
                    : 'Search products by name, scientific name, specs...'
                }
                className={`${inputClass} pl-9`}
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <span className="text-xs text-[#6B7280] font-semibold whitespace-nowrap">
                {language === 'vi' ? 'Danh mục:' : 'Category:'}
              </span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="rounded-md border border-[#E5E0D5] bg-[#F8F2E6] px-3 py-2 text-xs font-semibold text-[#104D2E] outline-none"
              >
                <option value="all">{language === 'vi' ? 'Tất cả danh mục' : 'All Categories'}</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {language === 'vi' ? c.nameVi : c.nameEn}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Product Table */}
          <div className="overflow-x-auto rounded-lg border border-[#E5E0D5]">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F8F2E6] text-[#0B120C] uppercase tracking-wider font-semibold border-b border-[#E5E0D5]">
                <tr>
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4">{language === 'vi' ? 'Sản Phẩm' : 'Product'}</th>
                  <th className="py-3 px-4">{language === 'vi' ? 'Danh Mục' : 'Category'}</th>
                  <th className="py-3 px-4">{language === 'vi' ? 'Bảo Quản & Hạn Dùng' : 'Storage & Shelf Life'}</th>
                  <th className="py-3 px-4">{language === 'vi' ? 'Đóng Gói' : 'Packaging'}</th>
                  <th className="py-3 px-4 text-center">{language === 'vi' ? 'Chi Tiết' : 'Action'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E0D5] bg-white">
                {filteredProducts.map((p, idx) => (
                  <tr key={p.id} className="hover:bg-[#F8F2E6]/40 transition-colors">
                    <td className="py-3 px-4 text-[#6B7280] font-mono">{idx + 1}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={p.image}
                          alt={p.nameEn}
                          className="w-10 h-10 object-cover rounded border border-[#E5E0D5] shrink-0 bg-white"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                        <div>
                          <p className="font-semibold text-sm text-[#0B120C]">
                            {language === 'vi' ? p.nameVi : p.nameEn}
                          </p>
                          <p className="text-[11px] text-[#6B7280]">
                            {language === 'vi' ? p.nameEn : (p.nameVi || '')}
                            {p.scientificName ? ` (${p.scientificName})` : ''}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#F8F2E6] text-[#104D2E] border border-[#E5E0D5]">
                        {p.category}
                      </span>
                      {p.subCategory && (
                        <p className="text-[10px] text-[#6B7280] mt-0.5">{p.subCategory}</p>
                      )}
                    </td>
                    <td className="py-3 px-4 text-[#0B120C]">
                      <p className="font-medium">{p.specifications.shelfLife}</p>
                      <p className="text-[11px] text-[#6B7280]">{p.specifications.storage}</p>
                    </td>
                    <td className="py-3 px-4 text-[#6B7280]">
                      {p.specifications.packaging || 'Standard Export Carton / Bag'}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => setInspectProduct(p)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded border border-[#D8AA6D]/60 text-xs font-semibold text-[#104D2E] bg-[#F8F2E6] hover:bg-[#D8AA6D] hover:text-[#0B120C] transition"
                      >
                        <Eye size={12} />
                        {language === 'vi' ? 'Xem' : 'View'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12 text-[#6B7280]">
                <Package size={32} className="mx-auto text-[#D8AA6D] mb-2" />
                <p className="font-semibold">
                  {language === 'vi' ? 'Không tìm thấy sản phẩm phù hợp' : 'No products found'}
                </p>
                <p className="text-xs mt-1">
                  {language === 'vi' ? 'Thử tìm từ khóa khác hoặc bỏ bộ lọc danh mục' : 'Try another query or reset filter'}
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Catalogues Tab */
        <div className={`${cardClass} p-5 space-y-4`}>
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-xl font-bold text-[#0B120C]">
              {language === 'vi' ? 'Tài Liệu Catalogue Chính Thức' : 'Official PDF Catalogues'}
            </h2>
            <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full border border-green-200 font-semibold flex items-center gap-1.5">
              <CheckCircle2 size={13} /> {language === 'vi' ? 'Đã Tối Ưu Nén 100%' : '100% Compressed & Optimized'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CATALOGUES_LIST.map((cat: CatalogueInfo) => (
              <div
                key={cat.id}
                className="rounded-lg border border-[#E5E0D5] bg-white p-4 flex flex-col justify-between hover:shadow-md transition"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F8F2E6] text-[#104D2E]">
                      {cat.fileSize}
                    </span>
                    <FileText size={20} className="text-[#104D2E]" />
                  </div>
                  <h3 className="font-serif font-bold text-sm text-[#0B120C] mt-3">
                    {language === 'vi' ? cat.titleVi : cat.titleEn}
                  </h3>
                  <p className="text-xs text-[#6B7280] mt-1 line-clamp-2">
                    {language === 'vi' ? cat.descVi : cat.descEn}
                  </p>
                  <p className="text-[10px] text-[#6B7280]/80 font-mono mt-2 truncate">
                    {cat.fileName}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E5E0D5] flex items-center justify-between">
                  <a
                    href={`/catalogues/${cat.fileName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#104D2E] hover:text-[#D8AA6D] transition"
                  >
                    <Download size={13} />
                    {language === 'vi' ? 'Mở / Tải File' : 'Open / Download'}
                  </a>
                  <a
                    href={`https://drive.google.com/file/d/${cat.driveId}/view`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#6B7280] hover:text-[#0B120C] transition"
                  >
                    <ExternalLink size={11} /> Google Drive
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Inspect Product Modal */}
      {inspectProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-xl border border-[#E5E0D5] w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-6">
            <div className="flex items-start justify-between border-b border-[#E5E0D5] pb-4">
              <div className="flex items-center gap-3">
                <img
                  src={inspectProduct.image}
                  alt={inspectProduct.nameEn}
                  className="w-14 h-14 object-cover rounded-lg border border-[#E5E0D5] bg-white shrink-0"
                />
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0B120C]">
                    {language === 'vi' ? inspectProduct.nameVi : inspectProduct.nameEn}
                  </h3>
                  <p className="text-xs text-[#6B7280]">
                    {language === 'vi' ? inspectProduct.nameEn : inspectProduct.nameVi}
                    {inspectProduct.scientificName ? ` - ${inspectProduct.scientificName}` : ''}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setInspectProduct(null)}
                className="text-[#6B7280] hover:text-[#0B120C] p-1 rounded-full hover:bg-[#F8F2E6]"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-5 space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3 bg-[#F8F2E6]/60 p-3.5 rounded-lg border border-[#E5E0D5]">
                <div>
                  <span className="font-semibold text-[#6B7280] block">
                    {language === 'vi' ? 'Hạn sử dụng' : 'Shelf Life'}
                  </span>
                  <span className="font-bold text-[#0B120C] mt-0.5 block">
                    {inspectProduct.specifications.shelfLife}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-[#6B7280] block">
                    {language === 'vi' ? 'Bảo quản' : 'Storage'}
                  </span>
                  <span className="font-bold text-[#0B120C] mt-0.5 block">
                    {inspectProduct.specifications.storage}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-[#6B7280] block">
                    {language === 'vi' ? 'Quy cách đóng gói' : 'Packaging'}
                  </span>
                  <span className="font-bold text-[#0B120C] mt-0.5 block">
                    {inspectProduct.specifications.packaging}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-[#6B7280] block">
                    {language === 'vi' ? 'Xuất xứ' : 'Origin'}
                  </span>
                  <span className="font-bold text-[#0B120C] mt-0.5 block">
                    {inspectProduct.specifications.origin || 'Vietnam'}
                  </span>
                </div>
              </div>

              {inspectProduct.formats && inspectProduct.formats.length > 0 && (
                <div>
                  <span className="font-semibold text-[#0B120C] block mb-1.5">
                    {language === 'vi' ? 'Định dạng thành phẩm:' : 'Available Formats:'}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {inspectProduct.formats.map((fmt, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-[#104D2E]/10 text-[#104D2E] font-medium border border-[#104D2E]/20"
                      >
                        {fmt}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {inspectProduct.applications && inspectProduct.applications.length > 0 && (
                <div>
                  <span className="font-semibold text-[#0B120C] block mb-1.5">
                    {language === 'vi' ? 'Ứng dụng công nghiệp / ẩm thực:' : 'Key Applications:'}
                  </span>
                  <ul className="list-disc pl-5 space-y-1 text-[#6B7280]">
                    {inspectProduct.applications.map((app, i) => (
                      <li key={i}>{app}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E0D5] flex justify-end">
              <Button onClick={() => setInspectProduct(null)} variant="secondary">
                {language === 'vi' ? 'Đóng' : 'Close'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
