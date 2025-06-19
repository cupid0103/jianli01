import './App.css';
import avatar from './assets/avatar.png';

function App() {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <img src={avatar} alt="头像" className="resume-avatar" />
        <h1>吴嘉豪</h1>
        <div className="resume-contact">
          <span>年龄：22</span> | <span>电话：19922097252</span> | <span>邮箱：cupid0103w@163.com</span>
        </div>
      </header>
      <section className="resume-section resume-section-intention shadow-fancy font-art-1">
        <h2>求职意向</h2>
        <p>意向岗位：AI实习生 &nbsp;&nbsp; 意向城市：厦门</p>
      </section>
      <section className="resume-section resume-section-edu shadow-fancy font-art-2">
        <h2>教育经历</h2>
        <p>2021.09-2026.06 &nbsp; 华侨大学<br/>电子信息工程 | 本科</p>
        <p>GPA 4.11（年级前 6%）</p>
        <ul>
          <li>学习课程: 信号处理与算法基础、数字信号处理、EDA嵌入式(AI硬件部署基础)、机器学习与算法导论</li>
        </ul>
      </section>
      <section className="resume-section resume-section-project shadow-fancy font-art-3">
        <h2>项目经历</h2>
        <div className="resume-project">
          <strong>2025.01-至今 &nbsp; AI 教学生活助手应用广场</strong><br/>
          职位：全程独立<br/>
          技术方案：基于 coze 搭建 AI应用 <a href="https://www.coze.cn/s/QQEtmD8bA0Q/" target="_blank" rel="noopener noreferrer">项目链接</a>
          <ul>
            <li>开发大学物理助手，运用AI算法实现基于题库的智能出题、知识点学习与检索</li>
            <li>打造简历助手，利用自然语言处理技术提供简历生成/优化、岗位定制化模板服务</li>
            <li>设计AI面试官，结合语音识别与对话系统，支持多风格语音面试、渐进式多轮考核</li>
            <li>拓展轻量化工具，包括红色剧本杀、侨史阅读等，探索AI在文化传播领域的创新应用</li>
          </ul>
          <div>项目成果：入选学院重点孵化项目，完成全校推广，并嵌入学院官方公众号使用。</div>
        </div>
        <div className="resume-project">
          <strong>2025.01-至今 &nbsp; AI+Agent 校园行代理</strong><br/>
          职位：负责高校方主办主讲 AI 校园行活动，与 Datawhale 和扣子空间合作，策划 AI 技术讲座与实践课程，推动 AI 技术在校园的普及与应用，提升学生 AI 认知与实践能力。<br/>
          同时，积极规划后续推广活动，预计于 2025 年 7 月暑假期间，联合 Datawhale 和扣子空间引进夏令营活动，通过丰富的实践项目与专家指导，进一步深化学生对 AI 技术的理解与应用能力。
        </div>
      </section>
      <section className="resume-section resume-section-skill shadow-fancy font-art-4">
        <h2>相关技能</h2>
        <ul>
          <li>大模型技术栈：熟练掌握 LLaMA Factory 微调、Llama 本地部署、EasyDataset 微调数据集构建；精通 dify/coze 智能体开发、工作流搭建及 AI 应用开发，熟悉扣子空间操作</li>
          <li>AI 硬件基础：熟悉 51/32 单片机开发、EDA 设计及高精度电路焊接（误差 &lt; 0.1mm），积累 AI 边缘计算与硬件加速的实践经验，为 AI 算法部署提供硬件支持</li>
          <li>编程语言：Python（能运用 Python 进行 AI 模型构建）</li>
          <li>语言能力：英语 CET-4/CET-6</li>
        </ul>
      </section>
      <section className="resume-section resume-section-advantage shadow-fancy font-art-5">
        <h2>个人优势</h2>
        <ol>
          <li>AI 技术能力：深入理解大模型微调（LoRA/P-Tuning）、知识库构建及 MCP 原理与使用，拥有从 0 到 1 完成 AI 应用开发全链路实践经验；</li>
          <li>跨领域思维：能够将硬件开发与 AI 算法结合，以实际需求驱动项目，注重技术与业务的结合；</li>
          <li>持续学习：保持日均 6 小时以上深度学习，持续关注 AI 领域前沿技术，不断提升专业能力。</li>
        </ol>
      </section>
    </div>
  );
}

export default App;
