import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  const sections = [
    {
      title: 'Hỗ trợ Khách hàng',
      items: [
        'Thẻ ưu đãi',
        'Hướng dẫn mua online',
        'Ưu đãi dành cho Doanh nghiệp',
        'Chính sách trả góp',
        'Dịch vụ sửa chữa'
      ]
    },
    {
      title: 'Chính sách mua hàng',
      items: [
        'Điều kiện giao dịch chung',
        'Chính sách bảo hành',
        'Chính sách đổi trả',
        'Chính sách thanh toán',
        'Giao hàng và Lắp đặt tại nhà',
        'Dịch vụ lắp đặt và nâng cấp PC/ Laptop tại cửa hàng & TTBH',
        'Chính sách bảo mật thanh toán'
      ]
    },
    {
      title: 'Thông tin Shop Điện Tử',
      items: [
        'Giới thiệu Shop Điện Tử',
        'Hệ thống cửa hàng',
        'Trung tâm bảo hành',
        'Chính sách bảo mật',
        'Tin công nghệ',
        'Hỏi đáp',
        'Tuyển dụng'
      ]
    },
    {
      title: 'Cộng đồng Shop Điện Tử',
      items: [
        'Gọi mua hàng (miễn phí) 18006867',
        'Gọi chăm sóc 18006865',
        <a href="https://www.facebook.com/profile.php?id=100027503051540" target="_blank" rel="noopener noreferrer">Facebook Nguyễn Bảo</a>,
      ]
    },
    {
      title: 'Email liên hệ',
      items: [
        <span>Hỗ trợ Khách hàng: <a href="mailto:giabao2004ts@gmail.com">giabao2004ts@gmail.com</a></span>,
        <span>Liên hệ báo giá: <a href="mailto:giabao2004ts@gmail.com">giabao2004ts@gmail.com</a></span>,
        <span>Hợp tác phát triển: <a href="mailto:giabao2004ts@gmail.com">giabao2004ts@gmail.com</a></span>
      ]
    }
  ];

  return (
    <footer className={classes.footer}>
      {sections.map((section, index) => (
        <div key={index} className={classes['footer-section']}>
          <h3>{section.title}</h3>
          <ul>
            {section.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
