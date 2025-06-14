import { useRef, useEffect } from 'react';
import p5 from 'p5';

const DynamicBackground = ({ enableAnimation }) => {
    const containerRef = useRef();

    // If animation is disabled, don't render anything
    if (!enableAnimation) {
        return null;
    }

    useEffect(() => {

        const sketch = (p) => {
            let time = 0;
            let flowParticles = [];
            const color1 = p.color(0, 124, 240);
            const color2 = p.color(0, 223, 216);

            class Particle {
                constructor() { this.pos = p.createVector(p.random(p.width), p.random(p.height)); this.vel = p.createVector(0, 0); this.acc = p.createVector(0, 0); this.maxSpeed = 1; }
                update() { this.vel.add(this.acc); this.vel.limit(this.maxSpeed); this.pos.add(this.vel); this.acc.mult(0); }
                applyForce(force) { this.acc.add(force); }
                
                show() {
                    const colorAmount = p.map(this.pos.x, 0, p.width, 0, 1);
                    const lerpedColor = p.lerpColor(color1, color2, colorAmount);
                    lerpedColor.setAlpha(40);
                    p.stroke(lerpedColor);
                    p.strokeWeight(1.5);
                    p.line(this.pos.x, this.pos.y, this.pos.x - this.vel.x * 2, this.pos.y - this.vel.y * 2);
                    this.checkEdges();
                }

                checkEdges() { if (this.pos.x > p.width) this.pos.x = 0; if (this.pos.x < 0) this.pos.x = p.width; if (this.pos.y > p.height) this.pos.y = 0; if (this.pos.y < 0) this.pos.y = p.height; }
            }

            p.setup = () => {
                p.createCanvas(p.windowWidth, p.windowHeight).parent(containerRef.current);
                const numParticles = Math.min(Math.floor(window.innerWidth / 30), 100);
                for (let i = 0; i < numParticles; i++) { flowParticles.push(new Particle()); }
            };

            p.draw = () => {
                const noiseScale = 0.005;
                p.background(13, 17, 23, 5);
                for (let particle of flowParticles) {
                    const angle = p.noise(particle.pos.x * noiseScale, particle.pos.y * noiseScale, time) * p.TWO_PI * 2;
                    const force = p5.Vector.fromAngle(angle);
                    force.setMag(0.1);
                    particle.applyForce(force);
                    particle.update();
                    particle.show();
                }
                time += 0.003;
            };

            p.windowResized = () => {
                p.resizeCanvas(p.windowWidth, p.windowHeight);
                flowParticles = [];
                const numParticles = Math.min(Math.floor(window.innerWidth / 20), 100);
                for (let i = 0; i < numParticles; i++) { flowParticles.push(new Particle()); }
            };
        };

        const p5Instance = new p5(sketch, containerRef.current);

        // Cleanup function to remove the canvas when the component unmounts
        return () => {
            p5Instance.remove();
        };
    }, [enableAnimation]);

    return <div id="p5-canvas-container" ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}></div>;
};

export default DynamicBackground;
