import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Home from "@/routes/index";
import About from "@/routes/about";
import MidwiferyCare from "@/routes/midwifery-care";
import BecomeAMidwife from "@/routes/become-a-midwife";
import Programs from "@/routes/programs";
import Resources from "@/routes/resources";
import News from "@/routes/news";
import Events from "@/routes/events";
import Jobs from "@/routes/jobs";
import Contact from "@/routes/contact";
import MemberLogin from "@/routes/member-login";

function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-serif text-7xl text-primary">404</p>
        <h1 className="mt-4 font-serif text-3xl text-foreground">Page not found</h1>
        <p className="mt-3 text-muted-foreground">The page you're looking for has moved or no longer exists.</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/midwifery-care" element={<MidwiferyCare />} />
            <Route path="/become-a-midwife" element={<BecomeAMidwife />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/news" element={<News />} />
            <Route path="/events" element={<Events />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/member-login" element={<MemberLogin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}
